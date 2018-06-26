<template lang="html">
  <div class="slider-tab">
     <div class="slider-header">
       <span
         v-for="(tab, index) in tabHeader"
         :style="{width: width + '%', display: 'inline-block'}"
         :class="{active: tabIndex === index}"
         :key="index"
         @click="tabSelect(index)">
         {{ tab }}
       </span>
       <i :style="{width: width + '%', left: tabIndex * width + '%'}"></i>
     </div>
     <div class="slider-content">
        <ul
          :style="{
            width: clientWidth * tabHeader.length + 'px',
            overflowX: 'auto',
            height: mainHeight + 'px',
            transform: `translate(-${clientWidth * tabIndex}px, 0)`}"
            ref="touchTarget">
          <li :style="{
              width: clientWidth + 'px',
              left: 0}">
              <div v-for="(item, index) in renderData" class="movie-tag" :key="index" @click="movieDetail(item.id)">
                <div class="left-content">
                  <img :src="item.images.small" referrerpolicy ="never" alt="">
                </div>
                <div class="mid-content">
                  <div class="title">{{ item.title }}</div>
                  <div class="rate">{{ item.rating.average }}</div>
                  <div class="detail">
                    <div class="item">
                      <span>类型：</span>{{ item.genres.join('/')}}
                    </div>
                    <div class="item">
                      <span>导演：</span>{{ item.directors[0].name }}
                    </div>
                    <div class="item">
                      <span>主演：</span>
                      <i v-for="(role, i) in item.casts" :key="i">{{ role.name }} </i>
                    </div>
                  </div>
                </div>
                <div class="right-content">
                  <div class="box">
                    <p>{{ toFixed(item.collect_count)}}</p>
                    <span class="buy">购票</span>
                  </div>
                </div>
              </div>
            </li>
          <li :style="{
              width: clientWidth + 'px',
              left: clientWidth + 'px'}">
              <div v-for="(item, index) in renderWillData" class="movie-tag" :key="index" @click="movieDetail(item.id)">
                <div class="left-content">
                  <img :src="item.images.small" referrerpolicy ="never" alt="">
                </div>
                <div class="mid-content">
                  <div class="title">{{ item.title }}</div>
                  <div class="rate">{{ item.rating.average }}</div>
                  <div class="detail">
                    <div class="item">
                      <span>类型：</span>{{ item.genres.join('/')}}
                    </div>
                    <div class="item">
                      <span>导演：</span>{{ item.directors[0] && item.directors[0].name || '无'}}
                    </div>
                    <div class="item">
                      <span>主演：</span>
                      <i v-for="(role, i) in item.casts" :key="i">{{ role.name }} </i>
                    </div>
                  </div>
                </div>
                <div class="right-content">
                  <div class="box">
                    <p>{{ toFixed2(item.collect_count)}}</p>
                    <span class="buy">购票</span>
                  </div>
                </div>
              </div>
            </li>
        </ul>
     </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      tabHeader: [
        '正在热映',
        '即将上映'
      ],
      tabIndex: 0,
      renderData: [],
      renderWillData: []
    }
  },
  computed: {
    width () {
      return (100 / this.tabHeader.length).toFixed(2)
    },
    clientWidth () {
      return document.body.clientWidth
    },
    mainHeight () {
      const rect = ~~document.getElementsByTagName('html')[0].getAttribute('style').match(/([\d.]+)px/)[1]
      const baseHei = document.body.clientHeight - rect * 2
      return baseHei
    }
  },
  methods: {
    ...mapActions([
      'GetHotMovies',
      'GetWillMovies'
    ]),
    tabSelect (index) {
      this.tabIndex = index
    },
    movieDetail (id) {
      console.log(id)
    },
    toFixed (num) {
      return num > 10000 ? (num + '').slice(1) + '人收藏' : num + '人收藏'
    },
    toFixed2 (num) {
      return num > 10000 ? (num + '').slice(1) + '人想看' : num + '人想看'
    }
  },
  mounted () {
    this.GetHotMovies().then((res) => {
      this.renderData = res.data.subjects
    })
    this.GetWillMovies().then((res) => {
      this.renderWillData = res.data.subjects
    })
  }
}
</script>

<style lang="scss">
@import '../../../styles/base.scss';
.slider-tab{
  height: 100%;
}
.slider-header{
  // display: flex;
  // justify-content: space-around;
  text-align: center;
  position: relative;
  span{
    height: .8rem;
    line-height: .8rem;
    color: $baseColor;
    &.active{
      color: $activeColor;
    }
  }
  i{
    display: inline-block;
    background-color: $activeColor;
    height: .04rem;
    position: absolute;
    bottom: 0;
    transition: all .2s;
  }
}
.slider-content{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  ul{
    position: absolute;
    top: 0;
    left: 0;
  }
  li{
    position: absolute;
    top: 0;
    word-break: break-all;
    list-style: none;
    background-color: #fff;
    margin-bottom: .5rem;
  }
  .movie-tag{
    display: flex;
    justify-content: flex-start;
    padding: .3rem;
    border-bottom: 1px solid #e4e4e4;
    .left-content{
      padding-right: .3rem;
      img{
        width: 1.6rem;
      }
    }
    .mid-content{
      width: 3.5rem;
      padding-right: .3rem;
      font-size: 12px;
      color: $baseColor;
      i{
        font-style: normal;
      }
    }
    .right-content{
      text-align: right;
      width: 1.4rem;
      padding-top: .2rem;
      .box{
        p{
          font-size: 12px;
          color: $buyColor;
          margin-bottom: 8px;
        }
        .buy{
          display: inline-block;
          color: $buyColor;
          background-color: #fff;
          border: 1px solid $buyColor;
          padding: .04rem .24rem;
          border-radius: .04rem;
        }
      }
    }
  }
}
@media (min-width:800px) {
  .slider-header{
    span{
      height: .2rem;
      line-height: .2rem;
    }
    i{
      display: inline-block;
      background-color: $activeColor;
      height: 2px;
      position: absolute;
      bottom: 0;
      transition: all .2s;
    }
  }
}
</style>

<template lang="html">
   <swiper :style="{height: mainHeight + 'px'}" :options="swiperOption" ref="mySwiper" @slide-change-transition-start="slideChangeTransitionStart">
      <!-- slides -->
      <swiper-slide>
        <div id="minirefresh0" class="minirefresh-wrap">
          <div class="minirefresh-scroll">
            <ul class="data-list" id="listdata0">
              <li>
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
            </ul>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div id="minirefresh1" class="minirefresh-wrap">
          <div class="minirefresh-scroll">
            <ul class="data-list" id="listdata1">
              <li>
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
      </swiper-slide>
    </swiper>
</template>

<script>
import { mapActions } from 'vuex'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      renderData: [],
      renderWillData: [],
      swiperOption: {}
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
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
    slideChangeTransitionStart () {
      this.$emit('tab-index', this.swiper.activeIndex)
    },
    toFixed (num) {
      return num > 10000 ? (num + '').slice(1) + '人收藏' : num + '人收藏'
    },
    toFixed2 (num) {
      return num > 10000 ? (num + '').slice(1) + '人想看' : num + '人想看'
    },
    movieDetail (id) {
      console.log(id)
    }
  },
  mounted () {
    this.GetHotMovies().then((res) => {
      this.renderData = res.data.subjects
    })
    this.GetWillMovies().then((res) => {
      this.renderWillData = res.data.subjects
    })
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">
@import '../../../styles/base.scss';
li{
  list-style: none
}
.slider-tab{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 2rem;
  left: 0;
}
.swiper-container{
  position: absolute;
  top: 2rem;
  left: 0;
  width: 100%;
  height: 100%;
}
.swiper-slide{
  overflow-y: auto;
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
  .movie-tag{
    .left-content{
      padding-right: .3rem;
      img{
        width: 100px;
      }
    }
    .mid-content{
      width: 350px;
      padding-right: .3rem;
    }
    .right-content{
      width: 200px;
      text-align: center;
    }
  }
}
</style>

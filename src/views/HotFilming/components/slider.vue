<template lang="html">
   <swiper :style="{height: mainHeight + 'px'}" :options="swiperOption" ref="mySwiper" @slide-change-transition-start="slideChangeTransitionStart">
      <!-- slides -->
      <swiper-slide>
        <div id="minirefresh1" class="minirefresh-wrap">
          <div class="minirefresh-scroll">
            <ul class="data-list" id="listdata0">
              <li v-for="(item, index) in renderData" :key="index" @click="movieDetail(item.id)">
              <div class="movie-tag">
                <div class="left-content">
                  <img :src="item.images.small" referrerpolicy ="never" alt="">
                </div>
                <div class="mid-content">
                  <div class="title">{{ item.title }}</div>
                  <star-score :score="item.rating.average"></star-score>
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
                    <p>{{ toFixed(item.collect_count, true)}}</p>
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
        <div id="minirefresh2" class="minirefresh-wrap">
          <div class="minirefresh-scroll">
            <ul class="data-list" id="listdata1">
              <li>
                <div v-for="(item, index) in renderWillData" class="movie-tag" :key="index" @click="movieDetail(item.id)">
                  <div class="left-content">
                    <img :src="item.images.small" referrerpolicy ="never" alt="">
                  </div>
                  <div class="mid-content">
                    <div class="title">{{ item.title }}</div>
                    <star-score :score="item.rating.average"></star-score>
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
                    <div class="box2">
                      <p>{{ toFixed(item.collect_count, false)}}</p>
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'minirefresh/dist/debug/minirefresh'
import 'swiper/dist/css/swiper.css'
import 'minirefresh/dist/minirefresh.min.css'
export default {
  data () {
    return {
      renderData: [],
      renderWillData: [],
      swiperOption: {},
      miniRefresh1: null,
      miniRefresh2: null
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
    toFixed (num, status) {
      const trans = num + ''
      if (trans.length > 0 && trans.length <= 4) {
        const text = status ? '人看过' : '人想看'
        return trans + text
      }
      if (trans.length > 4 && trans.length < 6) {
        let one = ~~trans[0]
        let two = ~~trans[1]
        let three = ~~trans[2]
        const text = status ? '万人看过' : '万人想看'
        if (three < 5) {
          return one + '.' + two + text
        } else if (three >= 5 && two !== 0) {
          return one + '.' + (two + 1) + text
        } else if (three >= 5 && two === 0) {
          return one + text
        }
      }
      if (trans.length >= 6) {
        let one1 = trans[0]
        let two2 = trans[1]
        let three3 = trans[2]
        const text = status ? '万人看过' : '万人想看'
        return one1 + two2 + '.' + three3 + text
      }
      return num
    },
    movieDetail (id) {
      this.$router.push({
        name: 'movie_detail',
        query: {
          id: id
        }
      })
    },
    currentShow () {
      this.GetHotMovies().then((res) => {
        this.renderData = res.data.subjects
        this.miniRefresh1.endDownLoading(true)
      })
    },
    nextShow () {
      this.GetWillMovies().then((res) => {
        this.renderWillData = res.data.subjects
        this.miniRefresh2.endDownLoading(true)
      })
    }
  },
  mounted () {
    this.currentShow()
    this.nextShow()
    this.$emit('tab-index', this.swiper.activeIndex)
    this.$nextTick(() => {
      this.miniRefresh1 = new MiniRefresh({
        container: '#minirefresh1',
        isScrollBar: false,
        down: {
          isAuto: true,
          callback: this.currentShow
        },
        up: {
          isLock: true,
          callback: function () {
            // 上拉事件
          }
        }
      })
      this.miniRefresh2 = new MiniRefresh({
        container: '#minirefresh2',
        isScrollBar: false,
        down: {
          isAuto: true,
          callback: this.nextShow
        },
        up: {
          isLock: true,
          callback: function () {
            // 上拉事件
          }
        }
      })
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
@import './slider.scss';
</style>

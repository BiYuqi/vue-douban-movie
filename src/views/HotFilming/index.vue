<template lang="html">
  <div class="hot-filming-wrap">
    <div class="header-wrap">
      <div class="header-top">
        <city-select
          class="city-select-media">
        </city-select>
        <search-bar
          class="search-bar-media"
          radius="4">
        </search-bar>
      </div>
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
    </div>
    <tab-slider
      @tab-index="tabIndexFun"
      ref="swiper">
    </tab-slider>
  </div>
</template>

<script>
import TabSlider from './components/slider.vue'
export default {
  data () {
    return {
      tabHeader: [
        '正在热映',
        '即将上映'
      ],
      tabIndex: 0
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
    tabSelect (index) {
      this.$nextTick(() => {
        this.tabIndex = index
        this.$refs.swiper.swiper.slideTo(index, 500, false)
      })
    },
    tabIndexFun (index) {
      this.tabIndex = index
    }
  },
  components: {
    TabSlider
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/base.scss';
.hot-filming-wrap{
  height: 100%;
}
.header-wrap{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  .header-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem;
  }
}
.city-select-media{
  width: 15%;
}
.slider-header{
  text-align: center;
  width: 100%;
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
.header-sub{
  height: 100%;
  position: fixed;
  top: 1rem;
  left: 0;
  width: 100%;
}
.search-bar-media{
  width: 85%;
}
@media screen and (device-width: 320px) {
  .city-select-media{
    width: 20%;
  }
  .search-bar-media{
    width: 80%;
  }
}
@media (min-width:800px) {
  .header-sub{
    width: 800px;
    top: .6rem;
    left: 50%;
    margin-left: -400px;
  }
}
</style>

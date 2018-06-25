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
            transform: `translate(-${clientWidth * tabIndex}px, 0)`}"
            ref="touchTarget">
          <li :style="{width: clientWidth + 'px'}" style="background-color: rgb(232, 232, 232)">{{ renderData }}</li>
          <li :style="{width: clientWidth + 'px'}" style="background-color: rgb(171, 148, 111)">B {{ clientWidth }}</li>
        </ul>
     </div>
  </div>
</template>

<script>
import { fetchHotFilm } from '@/api/hotFilming'
export default {
  data () {
    return {
      tabHeader: [
        '正在热映',
        '即将上映'
      ],
      tabIndex: 0,
      renderData: {}
    }
  },
  computed: {
    width () {
      return (100 / this.tabHeader.length).toFixed(2)
    },
    clientWidth () {
      return document.body.clientWidth
    }
  },
  methods: {
    tabSelect (index) {
      this.tabIndex = index
    },
    handlerTouch (e) {
      e.preventDefault()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.touchTarget.addEventListener('touchstart', this.handlerTouch)
      this.$refs.touchTarget.addEventListener('mousemove', this.handlerTouch)
    })
    fetchHotFilm().then((res) => {
      console.log(res.data)
      this.renderData = JSON.stringify(res.data.subjects)
    })
  },
  beforeDestory () {
    this.$refs.touchTarget.removeEventListener('touchstart', this.handlerTouch)
    this.$refs.touchTarget.removeEventListener('mousemove', this.handlerTouch)
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
  overflow-x: auto;
  ul{
    display: flex;
    justify-content: flex-start;
    transition: all .2s;
    height: 100%;
    margin-bottom: .8rem;
  }
  li{
    width: 100%;
    height: 100%;
  }
}
</style>

<template lang="html">
  <div
    class="movie-header"
    :style="{background: baseColor}">
    <svg-icon name="back" :size="16" class="m-t-c" @click.native="$router.go(-1)"></svg-icon>
    <span :class="fixedStyle" class="m-t-c">
      <svg-icon name="movie-break" :size="16"></svg-icon>
      <span style="vertical-align: middle;">{{fixedName}}</span>
    </span>
    <svg-icon name="share" :size="16" class="m-t-c"></svg-icon>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCenter: false
    }
  },
  props: {
    color: {
      type: String,
      default: '#3f87a6'
    },
    name: {
      type: String,
      default: '电影'
    },
    left: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    baseColor () {
      return this.color
    },
    fixedStyle () {
      return this.left ? 'm-t-ll' : 'm-t-cc'
    },
    fixedName () {
      return this.isCenter ? this.name : '电影'
    }
  },
  methods: {
    scrollEvt () {
      if (window.pageYOffset > 250) {
        this.isCenter = true
      } else {
        this.isCenter = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollEvt)
  },
  beforeDestory () {
    window.removeEventListener('scroll', this.scrollEvt)
  }
}
</script>

<style lang="scss" scoped>
.movie-header{
  height: 1rem;
  padding: 0 .2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  .m-t-c{
    color: #fff;
  }
  .m-t-cc{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .m-t-ll{
    position: absolute;
    left: 10%;
  }
}
</style>

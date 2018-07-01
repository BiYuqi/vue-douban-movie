<template lang="html">
  <div class="rate">
    <span v-if="score === 0">暂无评分</span>
    <span
      class="star-box"
      :style="{'background-position': filterStar(score)}"
      v-else></span>
    <span v-if="score !== 0">{{score}}</span>
  </div>
</template>

<script>
export default {
  name: 'StarScore',
  data () {
    return {}
  },
  props: {
    score: {
      type: Number,
      required: true,
      default: 0
    }
  },
  methods: {
    filterStar (ava) {
      if (ava === 0) {
        return '0 -100px'
      } else if (ava >= 0 && ava < 1) {
        return '0 -99px'
      } else if (ava >= 1 && ava < 2) {
        return '0 -88px'
      } else if (ava >= 2 && ava < 3) {
        return '0 -77px'
      } else if (ava >= 3 && ava < 4) {
        return '0 -66px'
      } else if (ava >= 4 && ava < 5) {
        return '0 -55px'
      } else if (ava >= 5 && ava < 6) {
        return '0 -44px'
      } else if (ava >= 6 && ava < 7) {
        return '0 -33px'
      } else if (ava >= 7 && ava < 8) {
        return '0 -22px'
      } else if (ava >= 8 && ava < 9) {
        return '0 -11px'
      } else if (ava >= 9 && ava < 10) {
        return '0 0'
      }
    }
  }
}
</script>

<style lang="scss">
.rate {
  .star-box{
    background: url('../../assets/img/rating.png') no-repeat;
    background-position: 0 0;
    width: 55px;
    height: 11px;
    display: inline-block;
  }
}
</style>

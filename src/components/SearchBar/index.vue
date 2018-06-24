<template lang="html">
  <div class="search-mock" :style="{'border-radius': radius + 'px'}">
    <svg-icon name="search"></svg-icon>
    <span>
      <i>{{ tags.join('/') }}</i>
    </span>
  </div>
</template>

<script>
import SvgIcon from '../SvgIcon/index.vue'
export default {
  name: 'SearchBar',
  props: {
    tags: {
      type: Array,
      default: () => {
        return [
          '电影',
          '电视剧',
          '影人'
        ]
      }
    },
    radius: {
      type: [String, Number],
      default: '6'
    }
  },
  components: {
    SvgIcon
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/base.scss';
.search-mock{
  height: .8rem;
  line-height: .8rem;
  text-align: center;
  background-color: $bgSearch;
  color: $baseColor;
  i{
    font-style: normal;
  }
}
</style>

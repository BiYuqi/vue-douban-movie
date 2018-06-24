<template lang="html">
  <div class="city-select">
    {{ name }}
    <svg-icon name="arrow-left"></svg-icon>
  </div>
</template>

<script>
import SvgIcon from '../SvgIcon/index.vue'
export default {
  name: 'CitySelect',
  props: {
    name: {
      type: String,
      default: '全国'
    }
  },
  components: {
    SvgIcon
  }
}
</script>
<style lang="scss">
@import '../../styles/base.scss';
.city-select{
  color: $activeColor;
  .icon{
    color: $baseColor;
  }
}
</style>

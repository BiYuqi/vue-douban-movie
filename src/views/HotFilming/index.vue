<template lang="html">
  <div class="hot-filming-wrap">
    <div class="header-top">
      <city-select
        class="city-select-media">
      </city-select>
      <search-bar
        class="search-bar-media"
        radius="4">
      </search-bar>
    </div>
    <div class="header-sub">
      <tab-slider></tab-slider>
    </div>
  </div>
</template>

<script>
import TabSlider from './components/slider.vue'
export default {
  components: {
    TabSlider
  }
}
</script>

<style lang="scss" scoped>
.hot-filming-wrap{
  height: 100%;
}
.header-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem;
}
.city-select-media{
  width: 15%;
}
.header-sub{
  height: 100%;
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
</style>

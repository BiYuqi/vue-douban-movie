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
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.header-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem;
}
.city-select-media{
  width: 15%;
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

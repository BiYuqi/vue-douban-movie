<template lang="html">
  <div class="byq-dashboard">
    <router-view />
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/views/TabBar/index.vue'
export default {
  components: {
    TabBar
  }
}
</script>

<style lang="scss">
.byq-dashboard{
  height: 100%;
}
</style>

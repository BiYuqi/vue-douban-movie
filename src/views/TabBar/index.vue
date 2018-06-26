<template lang="html">
  <div class="tab-wrap">
    <tab-item :tabs="tabbar"></tab-item>
  </div>
</template>

<script>
import TabItem from './TabItem'
export default {
  data () {
    return {
      tabbar: [
        {
          icon: 'filming',
          name: 'filming_index',
          title: '热映'
        },
        {
          icon: 'eye',
          name: 'look_index',
          title: '找片'
        },
        {
          icon: 'me',
          name: 'myself_index',
          title: '我的'
        }
      ]
    }
  },
  components: {
    TabItem
  }
}
</script>

<style lang="scss">
.tab-wrap{
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
  background-color: #fff;
}
</style>

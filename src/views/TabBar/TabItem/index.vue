<template lang="html">
  <div class="tab-wrap">
    <router-link
      tag="a"
      class="tab-item-wrap cla"
      :style="{width: width}"
      v-for="(item, index) in tabs"
      :to="{ name: item.name}"
      :key="index">
        <div class="tab-item">
          <svg-icon :name="item.icon"></svg-icon>
          <div>{{item.title}}</div>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    tabs: {
      type: Array,
      default: () => {
        return [
          {
            icon: 'filming',
            name: 'filming_index',
            title: '热映'
          },
          {
            icon: 'eye',
            name: 'look_index',
            title: '看片'
          },
          {
            icon: 'me',
            name: 'myself_index',
            title: '我的'
          }
        ]
      }
    }
  },
  computed: {
    width () {
      return (100 / this.tabs.length).toFixed(2) + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/base.scss';
.tab-wrap{
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.01rem solid #e8e8e8;
  .tab-item-wrap{
    text-align: center;
    color: $baseColor;
    .tab-item{
      height: 100%;
    }
    div{
      font-size: .12rem;
    }
    &.router-link-exact-active{
      .icon{
        color: $activeColor;
      }
      div{
        color: $activeColor;
      }
    }
  }
}
</style>

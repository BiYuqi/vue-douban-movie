<template lang="html">
  <div class="movie-detail">
    <movie-header :name="title">
    </movie-header>
    <div class="img-wrap">
      <img :src="images.medium" referrerpolicy ="never" alt="">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MovieHeader from './MovieHeader'
export default {
  data () {
    return {
      title: '', // name
      casts: [], // 影人
      summary: '',
      images: ''
    }
  },
  methods: {
    ...mapActions([
      'GetDetail'
    ])
  },
  created () {
    const ID = this.$route.query.id
    console.log(ID)
    this.GetDetail(ID).then((res) => {
      const DATA = res.data
      this.title = DATA.title
      this.images = DATA.images
      this.casts = DATA.casts
      this.summary = DATA.summary
    })
  },
  components: {
    MovieHeader
  }
}
</script>

<style lang="scss">
.movie-detail{
  padding-top: 1rem;
  height: 1700px;
  &::-webkit-scrollbar{
    width: 0;
  }
  .img-wrap{
    height: 5rem;
    background-color: #3f87a6;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      // width: 50%;
      height: 80%;
      display: inline-block;
    }
  }
}
</style>

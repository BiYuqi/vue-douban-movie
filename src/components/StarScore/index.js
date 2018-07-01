import StarScore from './index.vue'

StarScore.install = function (Vue, opts = {}) {
  Vue.component(StarScore.name, StarScore)
}
export default StarScore

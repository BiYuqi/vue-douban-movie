import SvgIcon from './index.vue'

SvgIcon.install = function (Vue, opts = {}) {
  Vue.component(SvgIcon.name, SvgIcon)
}
export default SvgIcon

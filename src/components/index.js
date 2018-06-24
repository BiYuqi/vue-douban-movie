import SearchBar from './SearchBar/index.vue'
import SvgIcon from './SvgIcon/index.vue'
import CitySelect from './CitySelect/index.vue'

const components = [
  SearchBar,
  SvgIcon,
  CitySelect
]

const install = function (Vue, opts = {}) {
  components.map((component) => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}

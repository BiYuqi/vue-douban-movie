import SearchBar from './SearchBar/index.js'
import SvgIcon from './SvgIcon/index.js'
import CitySelect from './CitySelect/index.js'
import StarScore from './StarScore/index.js'

const components = [
  SearchBar,
  SvgIcon,
  CitySelect,
  StarScore
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

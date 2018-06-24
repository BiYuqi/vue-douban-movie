import CitySelect from './index.vue'

CitySelect.install = function (Vue, opts = {}) {
  Vue.component(CitySelect.name, CitySelect)
}
export default CitySelect

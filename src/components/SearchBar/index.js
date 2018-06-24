import SearchBar from './index.vue'

SearchBar.install = function (Vue, opts = {}) {
  Vue.component(SearchBar.name, SearchBar)
}
export default SearchBar

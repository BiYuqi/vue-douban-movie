import Vue from 'vue'
import Vuex from 'vuex'
import {
  fetchHotFilm,
  fetchWillFilm,
  fetchMovieDetail
} from '@/api/movies'
Vue.use(Vuex)

const state = {
  moviesList: []
}
const mutations = {

}
const actions = {
  GetHotMovies ({ commit }) {
    return new Promise((resolve, reject) => {
      fetchHotFilm().then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  GetWillMovies ({ commit }) {
    return new Promise((resolve, reject) => {
      fetchWillFilm().then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  GetDetail ({ commit }, id) {
    return new Promise((resolve, reject) => {
      fetchMovieDetail(id).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store

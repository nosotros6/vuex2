import Vue from 'vue'
import Vuex from 'vuex'
import juegos from './juegos.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos
  },
  getters: {
    countJuegos: state=>{
      return state.juegos.length
    },
    totalJuegos: state=>{
      return state.juegos.reduce((total, juego)=>{
        return total + (juego.stock*juego.precio)
      },0)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

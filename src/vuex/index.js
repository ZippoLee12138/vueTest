
import Vue from 'vue'
import Vuex from 'vuex'
import KFCList from './moduleA'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productions: [
      {
        name: '电脑',
        price: 25000
      }, {
        name: '手机',
        price: 7000
      }, {
        name: '平板',
        price: 3000
      }
    ]
  },
  getters: {
    saleProduct (state) {
      let saleProductions = state.productions.map(production => {
        return {
          name: production.name,
          price: production.price / 2
        }
      })

      return saleProductions
    }
  },
  mutations: {
    minusPrice (state, payload) {
      state.productions.map(product => {
        product.price -= payload
      })
    }
  },
  actions: {
    minusPriceAsync (content, payload) {
      setTimeout(() => {
        content.commit('minusPrice', payload)
      }, 2000)
    }
  },
  modules: {
    KFCList,
  }
})

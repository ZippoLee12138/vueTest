export default {
  state: {
    productions: [
      {
        name: '汉堡',
        price: 20
      }, {
        name: '上校鸡腿',
        price: 25
      }, {
        name: '可口可乐',
        price: 5
      }
    ]
  },
  mutations: {
    saleAction (state, payload) {
      state.productions.map(product => {
        product.price /= 2
      })
    }
  },
  actions: {
    saleAction (content, payload) {
      setTimeout(() => {
        content.commit('saleAction', payload)
      }, 1000)
    }
  },
  getters: {

  }
}

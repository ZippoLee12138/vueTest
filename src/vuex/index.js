
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productions: [
            {
                name: '电脑',
                price: 25000
            },{
                name: '手机',
                price: 7000
            },{
                name: '平板',
                price: 3000
            }
        ]
    }
})
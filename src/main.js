// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Apple from "./components/apple"
import Banana from "./components/banana"

Vue.config.productionTip = false

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/apple',
      component: Apple
    },
    {
      path: '/banana',
      component: Banana
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  // directives: {
  //   color: function (el, binding) {
  //     el.style.color = binding.value
  //   },
  //   focus: {
  //     inserted: function (el, binding) {
  //       el.focus()
  //     }
  //   }
  // }
})

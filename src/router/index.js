import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PythonComp from '@/components/Python'
import JavaScriptComp from '@/components/JavaScript'
import ES6Comp from '@/components/ES6'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/python'
    },
    {
      path: '/python',
      name: 'PythonComponent',
      component: PythonComp
    }, {
      path: '/javaScript',
      name: 'JavaScriptComponent',
      component: JavaScriptComp,
      children: [{
        path: 'es6',
        name: 'es6Compoent',
        component: ES6Comp
      }]
    }
  ]
})

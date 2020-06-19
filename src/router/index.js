import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Page1 from '@/components/Page1'
import ComputedProperty from '@/components/ComputedProperty'
import Methods from '@/components/Methods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/computedProperty',
      name: 'ComputedProperty',
      component: ComputedProperty
    },
    {
      path: '/methods',
      name: 'Methods',
      component: Methods
    }
  ]
})

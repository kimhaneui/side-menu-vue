import Vue from 'vue'
import Router from 'vue-router'
import first from '../first.vue'
import seconde from '../seconde.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/first',
      component: first
   },
   {
      path: '/seconde',
      component: seconde
   }
  ]
})

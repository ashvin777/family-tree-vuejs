import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/pages/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainPage
    }
  ]
})

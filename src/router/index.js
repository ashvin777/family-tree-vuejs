import Vue from 'vue'
import Router from 'vue-router'
import PATH from './path';

import MainPage from '@/components/pages/main.vue'
import AllMembers from '@/components/pages/all-members/all-members.vue';
import FamilyTree from '@/components/pages/family-tree/family-tree.vue';
import Favourite from '@/components/pages/favourite/favourite.vue';
import Login from '@/components/pages/login/login.vue';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: PATH.LOGIN
  }, {
    path: PATH.LOGIN,
    component: Login
  }, {
    path: PATH.MAIN,
    component: MainPage,
    children: [{
      path: PATH.ALL_MEMBERS,
      component: AllMembers
    }, {
      path: PATH.FAMILY_TREE,
      component: FamilyTree
    }, {
      path: PATH.FAVOURITE,
      component: Favourite
    }]
  }]
})

import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home.vue'
import menu from '../pages/menu/menu.vue'
import basket from '../pages/basket/basket.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: home },
    { path: '/menu', component: menu },
    { path: '/basket', component: basket }
  ]
})

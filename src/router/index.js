import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home.vue'
import products from '../pages/products/products.vue'
import basket from '../pages/basket/basket.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: home },
    { path: '/products', component: products },
    { path: '/basket', component: basket }
  ]
})

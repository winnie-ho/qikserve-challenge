import Vue from 'vue'
import Router from 'vue-router'
import products from '../pages/products/products.vue'
import basket from '../pages/basket/basket.vue'
import checkout from '../pages/checkout/checkout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: products },
    { path: '/basket', component: basket },
    { path: '/checkout', component: checkout }
  ]
})

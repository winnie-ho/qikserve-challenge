import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'


Vue.use(Vuex)
Vue.use(VueResource)


export const store = new Vuex.Store({
  state: {
    products: [],
    basket: [],
    product: {}
  },
  mutations: {
    setProducts: (state, payload) => (state.products = payload),
    addToBasket: (state, payload) => (state.basket.push(payload)),
    emptyBasket: (state) => (state.basket = []),
    setProduct: (state, payload) => (state.product = payload)
  },
  getters: {

  },
  actions: {
    fetchProducts: (context) => {
      Vue.http.get('http://localhost:8081/products').then(response => {
        if (response.status === 200) {
          context.commit('setProducts', response.body);
        } else {
          console.log('Failed request', `${response.status} ${response.statusText}`);
        }
      })
    },
    addToBasket: (context, productId) => {
      Vue.http.get(`http://localhost:8081/products/${productId}`).then(response => {
        if (response.status === 200) {
          context.commit('setProduct', response.body);
          context.commit('addToBasket', response.body);
        } else {
          console.log('Failed request', `${response.status} ${response.statusText}`);
        }
      })
    },
    emptyBasket: (context) => {
      context.commit('emptyBasket');
    }
  }
})

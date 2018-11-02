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
    updateBasketQuantity: (state, payload) => (state.basket[payload].quantity += 1),
    removeFromBasket: (state, payload) => (state.basket.splice(payload, 1)),
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
          context.commit('addToBasket', Object.assign({}, response.body, {
            quantity: 1,
            saving: 0
          }));
        } else {
          console.log('Failed request', `${response.status} ${response.statusText}`);
        }
      })
    },
    fetchProduct: (context, productId) => {
      Vue.http.get(`http://localhost:8081/products/${productId}`).then(response => {
        if (response.status === 200) {
          context.commit('setProduct', response.body);
        } else {
          console.log('Failed request', `${response.status} ${response.statusText}`);
        }
      })
    },
    updateBasketQuantity: (context, existingItemIndex) => {
      context.commit('updateBasketQuantity', existingItemIndex)
    },
    emptyBasket: (context) => {
      context.commit('emptyBasket');
    },
    removeFromBasket: (context, product) => {
      const indexToRemove = context.state.basket.findIndex(item => item.id === product.id);
      context.commit('removeFromBasket', indexToRemove);
    }
  }
})

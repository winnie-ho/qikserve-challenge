import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'


Vue.use(Vuex)
Vue.use(VueResource)

export const store = new Vuex.Store({
  state: {
    products: [],
    basket: []
  },
  mutations: {
    setProducts: (state, payload) => (state.products = payload),
    addToBasket: (state, payload) => (state.basket.push(payload)),
    updateBasketQuantity: (state, payload) => (state.basket[payload.indexToUpdate].quantity += payload.value),
    updateBasketSaving: (state, payload) => (state.basket[payload.indexToUpdate].saving = payload.saving),
    removeFromBasket: (state, payload) => (state.basket.splice(payload, 1)),
    emptyBasket: (state) => (state.basket = [])
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
          context.commit('addToBasket', Object.assign({}, response.body, {
            quantity: 1,
            saving: 0
          }));
        } else {
          console.log('Failed request', `${response.status} ${response.statusText}`);
        }
      })
    },
    updateBasketQuantity: (context, action) => {
      const indexToUpdate = context.state.basket.findIndex(item => item.id === action.productId);
      context.commit('updateBasketQuantity', { value: action.value, indexToUpdate})
    },
    updateBasketSaving: (context, action) => {
      const indexToUpdate = context.state.basket.findIndex(item => item.id === action.productId);
      context.commit('updateBasketSaving', { saving: action.saving, indexToUpdate })
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


export const mutations = {
  setProducts: (state, payload) => (state.products = payload),
  addToBasket: (state, payload) => (state.basket.push(payload)),
  updateBasketQuantity: (state, payload) => (state.basket[payload.indexToUpdate].quantity += payload.value),
  updateBasketSaving: (state, payload) => (state.basket[payload.indexToUpdate].saving = payload.saving),
  removeFromBasket: (state, payload) => (state.basket.splice(payload, 1)),
  emptyBasket: (state) => (state.basket = [])
}
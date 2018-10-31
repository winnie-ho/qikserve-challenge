import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'


Vue.use(Vuex)
Vue.use(VueResource)


export const store = new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts: (state, payload) => (state.products = payload)
  },
  getters: {

  },
  actions: {
    fetchProducts: (context) => {
      Vue.http.get('http://localhost:8081/products').then(response => {
        if (response.status === 200) {
          context.commit('setProducts', response.data)
        } else {
          console.log('Failed request', `${response.status} ${response.statusText}`);
        }
      })
    }
  }
})

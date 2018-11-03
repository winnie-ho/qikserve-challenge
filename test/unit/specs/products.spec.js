import Vue from 'vue'
import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import products from '@/pages/products/products'
import Vuex from 'vuex'
import { mockState } from '../testHelper.js'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('products.vue', () => {
  let actions;
  let store;
  
  beforeEach(() => {
    actions = {
      fetchProducts: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        basket: mockState.basket,
        products: mockState.products
      },
      actions
    })
  })

  
  it('When mounted the fetchProducts action will have been called', () => {
    shallowMount(products, { store, localVue });
    expect(actions.fetchProducts).toHaveBeenCalled();
  })


  it('Computed basket value returns the state products', () => {
    const productsComponent = shallowMount(products, { store, localVue });
    expect(productsComponent.vm.products.length).toEqual( 4 );
    expect(productsComponent.vm.products[0].id).toEqual( "Dwt5F7KAhi" );
  })


  it('Computed basket value returns the state basket', () => {
    const productsComponent = shallowMount(products, { store, localVue });
    expect(productsComponent.vm.basket.length).toEqual( 3 );
    expect(productsComponent.vm.basket[2].name).toEqual( 'Boring Fries!' );
  })


})


import Vue from 'vue'
import Vuex from 'vuex'
import { store } from '@/store/store.js'
import { mutations } from '@/store/store.js'
import { mockState } from '../testHelper.js'

Vue.use(Vuex)

describe('store mutations', () => {
  it('setProducts mutation sets the products to the store state.', () => {
    const payload = mockState.basket;

    mutations.setProducts(mockState, payload);
    expect(mockState.products).toEqual( mockState.basket )
  })

  it('addToBasket mutation adds a product to the state basket', () => {
    const payload = { 
      id:"Dwt5F7KAhi",
      name:"Amazing Pizza!",
      price:1099
    };

    expect(mockState.basket.length).toEqual( 3 )
    mutations.addToBasket(mockState, payload)
    expect(mockState.basket.length).toEqual( 4 )
    expect(mockState.basket[3]).toEqual( payload )
  })


  it('updateBasketQuantity mutation changes the basket quantity', () => {
    const increasedPayload = { 
      indexToUpdate:0,
      value:1,
    };

    const decreasedPayload = { 
      indexToUpdate:0,
      value:-1,
    };

    mutations.updateBasketQuantity(mockState, increasedPayload);
    expect(mockState.basket[0].quantity).toEqual( 13 );

    mutations.updateBasketQuantity(mockState, decreasedPayload);
    expect(mockState.basket[0].quantity).toEqual( 12 );
  })


  it('updateBasketSaving mutation changes the basket saving', () => {
    const payload = { 
      indexToUpdate:0,
      saving:100,
    };

    mutations.updateBasketSaving(mockState, payload);
    expect(mockState.basket[0].saving).toEqual( 100 );
  })


  it('removeFromBasket mutation removes an item from the basket', () => {
    expect(mockState.basket.length).toEqual( 4 );
    mutations.removeFromBasket(mockState);
    expect(mockState.basket.length).toEqual( 3 );
  })


  it('emptyBasket mutation empties the state basket', () => {
    mutations.emptyBasket(mockState);
    expect(mockState.basket.length).toEqual( 0 );
  })
})




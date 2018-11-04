import { shallowMount, createLocalVue } from '@vue/test-utils'
import basket from '@/pages/basket/basket'
import Vuex from 'vuex'
import { mockState } from '../testHelper.js'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('basket.vue', () => {
  let actions;
  let store;
  let basketComponent;
  
  beforeEach(() => {
    actions = {
      emptyBasket: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        basket: mockState.basket,
        products: mockState.products
      },
      actions
    })
    basketComponent = shallowMount(basket, { store, localVue });
  })

  
  it('Computed basket value returns the state basket', () => {
    expect(basketComponent.vm.basket.length).toEqual( 3 );
    expect(basketComponent.vm.basket[2].id).toEqual( "4MB7UfpTQs" );
  })


  it('Computed basketTotal value calculates the sum of the basket contents', () => {
    expect(basketComponent.vm.basketTotal).toEqual( 16185 );
  })


  it('Computed basketIsEmpty returns true if the basket is empty', () => {
    expect(basketComponent.vm.basketIsEmpty).toEqual( false );
  })


  it('The store action to emptyBasket is triggered when "Empty basket" button is pressed', () => {    
    basketComponent.find('.btn__text').trigger('click');
    expect(actions.emptyBasket).toHaveBeenCalled();

  })
})


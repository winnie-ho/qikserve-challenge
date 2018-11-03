import { shallowMount, createLocalVue } from '@vue/test-utils'
import checkout from '@/pages/checkout/checkout'
import Vuex from 'vuex'
import { mockState } from '../testHelper.js'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('checkout.vue', () => {
  let store;
  let checkoutComponent;
  
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        basket: mockState.basket,
        products: mockState.products
      }
    })
    checkoutComponent = shallowMount(checkout, { store, localVue });
  })

  
  it('Computed basket value returns the state basket', () => {
    expect(checkoutComponent.vm.basket.length).toEqual( 3 );
    expect(checkoutComponent.vm.basket[2].id).toEqual( "4MB7UfpTQs" );
  })


  it('Computed basketTotal value calculates the sum of the basket contents', () => {
    expect(checkoutComponent.vm.basketTotal).toEqual( 16185 );
  })


  it('Computed basketSavings value calculates the sum of the applicable savings in the basket', () => {
    expect(checkoutComponent.vm.basketSavings).toEqual( 3393 );
  })


  it('Computed basketTotalWithSavings value calculates the sum of the basket with the discounts applied', () => {
    expect(checkoutComponent.vm.basketTotalWithSavings).toEqual( 12792 );
  })


  it('Method to pay is triggered when pay button is pressed', () => {    
    expect(checkoutComponent.vm.paid).toBe(false);
    checkoutComponent.find('button').trigger('click');
    expect(checkoutComponent.vm.paid).toBe(true);
  })
})


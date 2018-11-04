import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import basket from '@/pages/basket/basket'
import basketItem from '@/components/basketItem/basketItem'
import Vuex from 'vuex'
import { mockState } from '../testHelper.js'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('basketItem.vue', () => {
  let actions;
  let store;
  let basketComponent;
  let basketItemComponent;
  
  beforeEach(() => {
    actions = {
      updateBasketSaving: jest.fn(),
      updateBasketQuantity: jest.fn(),
      removeFromBasket: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        basket: mockState.basket,
        products: mockState.products
      },
      actions
    })
    basketComponent = mount(basket, { store, localVue });
    basketItemComponent = basketComponent.findAll(basketItem);
  })

  it('There should be 3 basket items rendered', () => {
    expect(basketItemComponent.length).toEqual( 3 );
  })

  it('The correct products should be displayed through the basketItem component', () => {
    expect(basketItemComponent.at(0).text()).toContain( 'Amazing Pizza!' );
    expect(basketItemComponent.at(1).text()).toContain( 'Amazing Burger!' );
    expect(basketItemComponent.at(2).text()).toContain( 'Boring Fries!' );
  })

  
  it('The computed property finalPrice shows the amount payable after discounts applied', () => {
    expect(basketItemComponent.at(0).vm.finalPrice).toEqual( 10794 )
    expect(basketItemComponent.at(1).vm.finalPrice).toEqual( 1998 )
    expect(basketItemComponent.at(2).vm.finalPrice).toEqual( 0 )
  })
  
  
  it('The computed property totalSavings calculates savings per product type', () => {
    expect(basketItemComponent.at(0).vm.totalSavings).toEqual( 2394 )
    expect(basketItemComponent.at(1).vm.totalSavings).toEqual( 999 )
    expect(basketItemComponent.at(2).vm.totalSavings).toEqual( 0 )
  })


  it('The promotionText method displays the correct promo detail text', () => {
    expect(basketItemComponent.at(0).text()).toContain( 'Buy 2 for £17.99' );
    expect(basketItemComponent.at(1).text()).toContain( 'Buy 2 get 1 free' );
    
    const promotion = {
      id:"Gm1piPn7Fg",
      type:"FLAT_PERCENT",
      amount:10
    }
    
    expect(basketItemComponent.at(0).vm.promotionText(promotion)).toEqual( '10% off' );
  })


  it('The promotionText method displays the correct promo detail text', () => {
    let promotion = mockState.basket[0].promotions[0];
    
    expect(basketItemComponent.at(0).vm.calculateSaving(promotion)).toEqual( 2394 );
    
    promotion = mockState.basket[1].promotions[0];
    
    expect(basketItemComponent.at(1).vm.calculateSaving(promotion)).toEqual( 999 );
  })


  it('When a remove button is clicked, removeFromBasket action is dispatched.', () => {
    basketItemComponent.at(0).vm.removeItem();
    expect(actions.removeFromBasket).toHaveBeenCalled();
  })


  it('When a + button is clicked, updateBasketQuantity action is dispatched.', () => {
    basketItemComponent.at(0).vm.addQty();
    expect(actions.updateBasketQuantity).toHaveBeenCalled();
  })


  it('When a - button is clicked, updateBasketQuantity action is dispatched if quantity is currently greater than 0.', () => {
    basketItemComponent.at(0).vm.removeQty();
    expect(actions.updateBasketQuantity).toHaveBeenCalled();
  })


  it('When a - button is clicked, removeFromBasket action is dispatched if quantity is currently 0.', () => {
    basketItemComponent.at(2).vm.removeQty();
    expect(actions.removeFromBasket).toHaveBeenCalled();
  })

})


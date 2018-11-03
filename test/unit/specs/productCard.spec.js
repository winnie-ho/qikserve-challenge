import { mount, createLocalVue } from '@vue/test-utils'
import products from '@/pages/products/products'
import productCard from '@/components/productCard/productCard'
import Vuex from 'vuex'
import { mockState } from '../testHelper.js'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('productCard.vue', () => {
  let actions;
  let store;
  let productsComponent;
  let productCardComponent;
  
  beforeEach(() => {
    actions = {
      addToBasket: jest.fn(),
      updateBasketQuantity: jest.fn(),
      fetchProducts: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        basket: mockState.basket,
        products: mockState.products
      },
      actions
    })
    productsComponent = mount(products, { store, localVue });
    productCardComponent = productsComponent.findAll(productCard);
  })
  
  
  it('Computed basket value returns the state basket', () => {
    expect(productCardComponent.at(0).vm.basket.length).toEqual( 3 );
    expect(productCardComponent.at(0).vm.basket[0].name).toEqual( 'Amazing Pizza!' );
  })


  it('There should be 4 product cards rendered', () => {
    expect(productCardComponent.length).toEqual( 4 );
  })


  it('The correct product and price should be displayed - pizza', () => {
    expect(productCardComponent.at(0).text()).toContain( 'Amazing Pizza!' );
    expect(productCardComponent.at(0).text()).toContain( '£10.99' );
  })


  it('The correct product and price should be displayed - burger', () => {
    expect(productCardComponent.at(1).text()).toContain( 'Amazing Burger!' );
    expect(productCardComponent.at(1).text()).toContain( '£9.99' );
  })


  it('The correct product and price should be displayed - salad', () => {
    expect(productCardComponent.at(2).text()).toContain( 'Amazing Salad!' );
    expect(productCardComponent.at(2).text()).toContain( '£4.99' );
  })


  it('The correct product and price should be displayed - fries', () => {
    expect(productCardComponent.at(3).text()).toContain( 'Boring Fries!' );
    expect(productCardComponent.at(3).text()).toContain( '£1.99' );
  })


  it('When a product card is clicked, it adds to the basket if the product does not already exist in the basket', () => {
    const product = store.state.products[2];
    productCardComponent.at(2).vm.addToBasket(product);

    expect(actions.addToBasket).toHaveBeenCalled();
  })


  it('When a product card is clicked, it adds to the basket if the product already exists', () => {
    const product = store.state.products[0];
    productCardComponent.at(0).vm.addToBasket(product);

    expect(actions.updateBasketQuantity).toHaveBeenCalled();
  })
})


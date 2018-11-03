import { shallowMount, createLocalVue } from '@vue/test-utils'
import products from '@/pages/products/products'
import Vuex from 'vuex'
import { mockState } from '../testHelper.js'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('products.vue', () => {
  let actions;
  let store;
  let productsComponent;
  
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
    productsComponent = shallowMount(products, { store, localVue });
  })

  
  it('When mounted the fetchProducts action will have been called', () => {
    shallowMount(products, { store, localVue });
    expect(actions.fetchProducts).toHaveBeenCalled();
  })


  it('Computed products value returns the state products', () => {
    expect(productsComponent.vm.products.length).toEqual( 4 );
    expect(productsComponent.vm.products[0].id).toEqual( "Dwt5F7KAhi" );
  })


  it('Computed basket value returns the state basket', () => {
    expect(productsComponent.vm.basket.length).toEqual( 3 );
    expect(productsComponent.vm.basket[2].name).toEqual( 'Boring Fries!' );
  })

  it('Renders the products to the "Your order" summary when items are in the basket', () => {
    expect(productsComponent.text()).toContain('Amazing Pizza!')
    expect(productsComponent.text()).toContain('Amazing Burger!')
    expect(productsComponent.text()).toContain('Boring Fries!')
    expect(productsComponent.text()).not.toContain('Amazing Salad!')
    expect(productsComponent.find('h2').isVisible()).toBe(true)
  })

  it('Only shows the "Your order" summary when there is at least one item in the basket', () => {
    store.state.basket = [];
    expect(productsComponent.find('h2').isVisible()).toBe(false)
  })
})


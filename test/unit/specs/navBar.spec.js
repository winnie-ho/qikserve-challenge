import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import navBar from '@/components/navBar/navBar'
import Vuex from 'vuex'
import { mockState } from '../testHelper.js'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('navBar.vue', () => {
  let store;
  let navBarComponent;
  
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        basket: mockState.basket,
        products: mockState.products
      },
    })
    navBarComponent = shallowMount(navBar, { store, localVue });
  })

  
  it('Computed basket value returns the state basket', () => {
    expect(navBarComponent.vm.basket.length).toEqual( 3 );
    expect(navBarComponent.vm.basket[2].id).toEqual( "4MB7UfpTQs" );
  })


  it('Nav bar has a Menu link', () => {
    expect(navBarComponent.text()).toContain('Menu')
  })


  it('Nav bar has a Basket link', () => {
    expect(navBarComponent.text()).toContain('Basket')
  })


  it('Nav bar displays the number of basket items when it is not empty', () => {
    expect(navBarComponent.text()).toContain('15')
  })


  it('Nav bar does not display the number of items in basket if it is empty', () => {
    store.state.basket = [];
    expect(navBarComponent.text()).not.toContain('15')
  })

})


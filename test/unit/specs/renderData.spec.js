import Vue from 'vue'
import renderData from '@/mixins/renderData'

describe('renderData.vue', () => {
  it('should renderPrice correctly', () => {
    expect(renderData.methods.renderPrice(1111)).toBe('£11.11');
  })

  it('should renderPrice to 2 decimal points only', () => {
    const priceResult = renderData.methods.renderPrice(1111);
    const decimalUnits = priceResult.split(".")[1];

    expect(decimalUnits.length).toBe(2);
  })

  it('should renderBasketSize correctly with multi quantities', () => {
    const basket = [
      { 
        id:"Dwt5F7KAhi",
        name:"Amazing Pizza!",
        price:1099,
        promotions:[
          {
            id:"ibt3EEYczW",
            type:"QTY_BASED_PRICE_OVERRIDE",
            required_qty:2,
            price:1799
          }
        ],
        quantity:12,
        saving:2394
      },
      {
        id:"PWWe3w1SDU",
        name:"Amazing Burger!",
        price:999,
        promotions:[
          {
            id:"ZRAwbsO2qM",
            type:"BUY_X_GET_Y_FREE",
            required_qty:2,
            free_qty:1
          }
        ],
        quantity:3,
        saving:999
      },
      {
        id:"4MB7UfpTQs",
        name:"Boring Fries!",
        price:199,
        promotions:[],
        quantity:0,
        saving:0
      }
    ]

    expect(renderData.methods.renderBasketSize(basket)).toBe(15);
  })

  it('should renderBasketSize correctly when empty', () => {
    const basket = []
    expect(renderData.methods.renderBasketSize(basket)).toBe(0);
  })
})

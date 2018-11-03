export const mockState = {
  products: [
    { 
      id: "Dwt5F7KAhi",
      name: "Amazing Pizza!",
      price: 1099
    }, 
    { 
      id: "PWWe3w1SDU",
      name: "Amazing Burger!",
      price: 999
    }, 
    {
      "id": "C8GDyLrHJb",
      name: "Amazing Salad!",
      price: 499
    }, 
    {
      "id": "4MB7UfpTQs",
      name: "Boring Fries!",
      price: 199
    }
  ],
  basket: [
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
}
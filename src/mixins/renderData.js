export default {
  methods: {
    renderPrice: (price) => {
      return `£${ (price/100).toFixed(2) }`;
    },
    renderBasketSize: (basket) => {
      return basket.reduce((total, item) => total + item.quantity, 0);
    }
  }
}

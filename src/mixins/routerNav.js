export default {
  methods: {
    goToMenuPage(){
      this.$router.push('/');
    },
    goToBasketPage(){
      this.$router.push('/basket');
    },
    goToCheckoutPage(){
      this.$router.push('/checkout');
    }
  }
}

<template src="./productCard.html"></template>
<style scoped src='./productCard.css'></style>

<script src>
  export default {
    name: 'productCard',
    data () {
      return {
      }
    },
    props: [ "product" ],
    methods: {
      addToBasket(product){
        this.$store.dispatch('addToBasket', product);
        this.$store.dispatch('fetchProduct', product.id);
      },
      productPrice(price){
        return `£${price/100}`;
      }
    },
    computed: {

    }
  }
</script>


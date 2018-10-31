<template src="./basketItem.html"></template>
<style scoped src='./basketItem.css'></style>

<script src>
  export default {
    name: 'basketItem',
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


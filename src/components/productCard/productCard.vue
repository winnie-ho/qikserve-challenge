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
        console.log('addToBasket', product.name)
      },
      productPrice(price){
        return `£${price/100}`;
      }
    },
    computed: {

    }
  }
</script>


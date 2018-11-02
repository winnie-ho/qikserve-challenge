<template src="./productCard.html"></template>
<style scoped src='./productCard.css'></style>

<script src>
  import renderData from '../../mixins/renderData.js'
  export default {
    name: 'productCard',
    mixins: [ renderData ],
    data () {
      return {
      }
    },
    props: [ "product" ],
    methods: {
      addToBasket(product){
        const existingItem = this.basket.find(uniqueItem => uniqueItem.id === product.id);
        if (!existingItem){
          this.$store.dispatch('addToBasket', product.id);
        } else {
          const existingItemIndex = this.basket.findIndex(uniqueItem => uniqueItem.id === product.id);
          this.$store.dispatch('updateBasketQuantity', existingItemIndex);
        }
      }
    },
    computed: {
      basket(){
        return this.$store.state.basket;
      }
    }
  }
</script>


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
        this.$store.dispatch('addToBasket', product.id);
      }
    },
    computed: {

    }
  }
</script>


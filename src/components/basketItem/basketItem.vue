<template src="./basketItem.html"></template>
<style scoped src='./basketItem.css'></style>

<script src>
  import renderData from '../../mixins/renderData.js'
  export default {
    name: 'basketItem',
    mixins: [ renderData ],
    data () {
      return {
      }
    },
    props: [ "product" ],
    methods: {
      removeItem(){
        this.$store.dispatch('removeFromBasket', this.product);
      }
    },
    computed: {

    }
  }
</script>


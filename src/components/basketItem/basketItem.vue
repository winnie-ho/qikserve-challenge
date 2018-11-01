<template src="./basketItem.html"></template>
<style scoped src='./basketItem.css'></style>

<script src>
  import renderData from '../../mixins/renderData.js'
  import promotionItem from "../../components/promotionItem/promotionItem.vue"

  export default {
    name: 'basketItem',
    mixins: [ renderData ],
    components: {
      "promotion-item": promotionItem,
    },
    data () {
      return {
      }
    },
    props: [ "product" , "showPromotions"],
    methods: {
      removeItem(){
        this.$store.dispatch('removeFromBasket', this.product);
      }
    },
    computed: {

    }
  }
</script>


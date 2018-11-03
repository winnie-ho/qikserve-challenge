<template src="./checkout.html"></template>
<style scoped src='./checkout.css'></style>

<script src>
  import navBar from "../../components/navBar/navBar.vue"
  import basketItem from "../../components/basketItem/basketItem.vue"
  import renderData from '../../mixins/renderData.js'
  import router from '../../router'

  export default {
    name: 'checkout',
    mixins: [ renderData ],
    components: {
      "nav-bar": navBar,
      "basket-item": basketItem,
      "router-link": router
    },
    data () {
      return {
        paid: false
      }
    },
    methods: {
      pay(){
        this.paid = true;
      }
    },
    computed: {
      basket(){
        return this.$store.state.basket;
      },
      basketTotal(){
        return this.basket.reduce((basketTotal, item) => basketTotal + (item.price * item.quantity), 0);
      },
      basketSavings(){
        return this.basket.reduce((basketSavings, item) => basketSavings + (item.saving), 0);
      },
      basketTotalWithSavings(){
        return this.basketTotal - this.basketSavings;
      }
    }
  }
</script>


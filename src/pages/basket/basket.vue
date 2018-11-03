<template src='./basket.html'></template>
<style scoped src='./basket.css'></style>

<script>
import navBar from "../../components/navBar/navBar.vue"
import basketItem from "../../components/basketItem/basketItem.vue"
import renderData from "../../mixins/renderData.js"
import router from '../../router'

export default {
  name: "basket",
  mixins: [ renderData ],
  components: {
    "nav-bar": navBar,
    "basket-item": basketItem,
    "router-link": router
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    emptyBasket(){
      this.$store.dispatch('emptyBasket');
    }
  },
  computed: {
    basket(){
      return this.$store.state.basket;
    },
    basketTotal(){
      return this.$store.state.basket.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    basketIsEmpty(){
      return this.basket.length === 0;
    }
  }
};
</script>


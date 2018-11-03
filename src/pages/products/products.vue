<template src='./products.html'></template>
<style scoped src='./products.css'></style>

<script>
import navBar from "../../components/navBar/navBar.vue"
import productCard from "../../components/productCard/productCard.vue"
import router from '../../router'

export default {
  name: "products",
  components: {
    "nav-bar": navBar,
    "product-card": productCard,
    "router-link": router
  },
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
  },
  computed: {
    products(){
      return this.$store.state.products;
    },
    basket(){
      return this.$store.state.basket;
    }
  }
};
</script>
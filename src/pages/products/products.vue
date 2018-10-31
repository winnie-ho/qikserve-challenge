<template src='./products.html'></template>
<style scoped src='./products.css'></style>

<script>
import navBar from "../../components/navBar/navBar.vue"
export default {
  name: "products",
  components: {
    "nav-bar": navBar
  },
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    productPrice(price){
      return `£${price/100}`;
    }
  },
  computed: {
    products(){
      return this.$store.state.products;
    }
  }
};
</script>


<template src='./navBar.html'></template>
<style scoped src='./navBar.css'></style>

<script>
export default {
  name: "navBar",
  components: {

  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    enterHomePage(){
      this.$router.push('/');
    },
    enterProductsPage(){
      this.$router.push('/products');
    },
    enterBasketPage(){
      this.$router.push('/basket');
    }
  },
  computed: {
    basket(){
      return this.$store.state.basket;
    }
  }
};
</script>


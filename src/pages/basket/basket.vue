<template src='./basket.html'></template>
<style scoped src='./basket.css'></style>

<script>
import navBar from "../../components/navBar/navBar.vue"
import basketItem from "../../components/basketItem/basketItem.vue"
export default {
  name: "basket",
  components: {
    "nav-bar": navBar,
    "basket-item": basketItem
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    
  },
  computed: {
    basket(){
      return this.$store.state.basket;
    }
  }
};
</script>


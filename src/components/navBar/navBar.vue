<template src='./navBar.html'></template>
<style scoped src='./navBar.css'></style>

<script>
import renderData from "../../mixins/renderData.js"
import routerNav from '../../mixins/routerNav.js'


export default {
  name: "navBar",
  mixins: [ renderData, routerNav ],
  components: {
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


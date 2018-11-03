<template src='./navBar.html'></template>
<style scoped src='./navBar.css'></style>

<script>
import renderData from "../../mixins/renderData.js"
import router from "../../router"

export default {
  name: "navBar",
  mixins: [ renderData ],
  components: {
    "router-link": router
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


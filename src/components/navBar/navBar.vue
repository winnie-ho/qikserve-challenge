<template src='./navBar.html'></template>
<style scoped src='./navBar.css'></style>

<script>
import renderData from "../../mixins/renderData.js"

export default {
  name: "navBar",
  mixins: [ renderData ],
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


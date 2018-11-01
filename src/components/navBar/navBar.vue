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
  },
  computed: {
    basket(){
      return this.$store.state.basket;
    }
  }
};
</script>


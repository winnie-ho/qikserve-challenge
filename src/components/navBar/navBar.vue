<template src='./navBar.html'></template>
<style scoped src='./navBar.css'></style>

<script>
import sharedBehaviours from '../../mixins/sharedBehaviours.js';


export default {
  name: "navBar",
  mixins: [ sharedBehaviours ],
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


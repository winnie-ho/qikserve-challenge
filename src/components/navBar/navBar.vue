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
    enterMenuPage(){
      this.$router.push('/menu');
    },
    enterBasketPage(){
      this.$router.push('/basket');
    }
  },
  computed: {
    
  }
};
</script>


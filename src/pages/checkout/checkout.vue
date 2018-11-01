<template src="./checkout.html"></template>
<style scoped src='./checkout.css'></style>

<script src>
  import navBar from "../../components/navBar/navBar.vue"
  import renderData from '../../mixins/renderData.js'
  export default {
    name: 'checkout',
    mixins: [ renderData ],
    components: {
      "nav-bar": navBar
    },
    data () {
      return {
      }
    },
    methods: {
      pay(){
        console.log('PAY')
      }
    },
    computed: {

    }
  }
</script>


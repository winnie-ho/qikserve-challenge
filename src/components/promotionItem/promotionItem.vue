<template src="./promotionItem.html"></template>
<style scoped src='./promotionItem.css'></style>

<script src>
  import renderData from '../../mixins/renderData.js'
  export default {
    name: 'promotionItem',
    mixins: [ renderData ],
    data () {
      return {
      }
    },
    props: [ "promotion" ],
    methods: {
    },
    computed: {

    }
  }
</script>


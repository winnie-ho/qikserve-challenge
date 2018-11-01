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
      reductions(type){
        switch (type) {
          case "QTY_BASED_PRICE_OVERRIDE":
            console.log('type1', type);
            break;
          case "BUY_X_GET_Y_FREE":
            console.log('type2', type);
            break;
          case "FLAT_PERCENT":
            console.log('type3', type);
            break;
        }
      }
    },
    computed: {
    }
  }
</script>


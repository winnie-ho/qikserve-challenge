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
    props: [ "promotion", "product" ],
    methods: {
      },
    computed: {
      saving(){
        switch (this.promotion.type) {
          case "QTY_BASED_PRICE_OVERRIDE":
            if (this.product.quantity >= this.promotion.required_qty){
              const criteriaMetCount = Math.floor(this.product.quantity / this.promotion.required_qty);
              const saving = ((this.product.price * this.promotion.required_qty) - this.promotion.price) * criteriaMetCount;
              console.log('updateTotal', saving);
              return saving;
            }
            return 0;
            break;
          case "BUY_X_GET_Y_FREE":
            if (this.product.quantity >= this.promotion.required_qty){
              const criteriaMetCount = Math.floor(this.product.quantity / this.promotion.required_qty);
              const saving = (this.product.price * (this.promotion.required_qty - this.promotion.free_qty)) * criteriaMetCount;
              console.log('updateTotal', saving);
              return saving
            }
            return 0;
            break;
          case "FLAT_PERCENT":
            const saving = (this.product.price * (this.promotion.amount/100)) * this.product.quantity;
            console.log('updateTotal', saving);
            return saving
            break;
        }
      }
    }
  }
</script>


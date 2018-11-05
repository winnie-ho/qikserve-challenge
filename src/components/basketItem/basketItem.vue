<template src="./basketItem.html"></template>
<style scoped src='./basketItem.css'></style>

<script src>
  import sharedBehaviours from '../../mixins/sharedBehaviours.js'

  export default {
    name: 'basketItem',
    mixins: [ sharedBehaviours ],
    data () {
      return {
      }
    },
    props: [ "product" , "showPromotions" ],
    methods: {
      removeItem(){
        this.$store.dispatch('removeFromBasket', this.product);
      },
      calculateSaving(promotion){
        switch (promotion.type) {
          case "QTY_BASED_PRICE_OVERRIDE":
            if (this.product.quantity >= promotion.required_qty){
              const criteriaMetCount = Math.floor(this.product.quantity / promotion.required_qty);
              return ((this.product.price * promotion.required_qty) - promotion.price) * criteriaMetCount;
            }
            return 0;
            break;
          case "BUY_X_GET_Y_FREE":
            if (this.product.quantity >= promotion.required_qty){
              const criteriaMetCount = Math.floor(this.product.quantity / promotion.required_qty);
              return (this.product.price * (promotion.required_qty - promotion.free_qty)) * criteriaMetCount;
            }
            return 0;
            break;
          case "FLAT_PERCENT":
            return (this.product.price * (promotion.amount/100)) * this.product.quantity;
            break;
          default:
          return 0;
        }
      },
      promotionText(promotion){
        switch (promotion.type) {
          case "QTY_BASED_PRICE_OVERRIDE":
            return `Buy ${promotion.required_qty} for ${this.renderPrice(promotion.price)}`;
            break;
          case "BUY_X_GET_Y_FREE":
            return `Buy ${promotion.required_qty} get ${promotion.free_qty} free`;
            break;
          case "FLAT_PERCENT":
            return `${promotion.amount}% off`;
            break;
        }
      },
      addQty(quantity){
        this.$store.dispatch('updateBasketQuantity', { value: 1, productId: this.product.id });
      },
      removeQty(){
        if (this.product.quantity !== 0) {
          this.$store.dispatch('updateBasketQuantity', { value: -1, productId: this.product.id });
        } 
        if (this.product.quantity === 0) {
          this.$store.dispatch('removeFromBasket', this.product);
        }
      }
    },
    computed: {
      finalPrice(){
        return (this.product.quantity * this.product.price) - this.totalSavings;
      },
      totalSavings(){
        const saving = this.product.promotions.reduce((totalSavings, promotion) => totalSavings + this.calculateSaving(promotion), 0);
        this.$store.dispatch('updateBasketSaving', { saving, productId: this.product.id });
        return saving;
      }
    }
  }
</script>


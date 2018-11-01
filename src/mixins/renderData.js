export default {
  data () {
    return {
    }
  },
  methods: {
    renderPrice: (price) => {
      return `£${ (price/100).toFixed(2) }`;
    }
  }
}

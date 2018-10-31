export default {
  data () {
    return {
    }
  },
  methods: {
    renderPrice: (price) => {
      return `£${price/100}`;
    }
  }
}

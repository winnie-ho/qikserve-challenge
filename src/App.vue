<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import products from './pages/products/products.vue'

export default {
  name: 'App',
  components: {
    'products': products,
  }
}
</script>

<style>
  @import './styles/app-style.css'
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import home from './pages/home/home.vue'

export default {
  name: 'App',
  components: {
    'home': home,
  }
}
</script>

<style>
  @import './styles/app-style.css'
</style>

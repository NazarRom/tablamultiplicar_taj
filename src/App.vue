<template>
  <div>
<MenuTabla/>
<router-view></router-view>
  </div>
</template>

<script>
import MenuTabla from './components/MenuTabla.vue'

export default {
  name: 'App',
  components: {
   MenuTabla
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

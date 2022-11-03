<template>
  <div>
    <h1>
        sin boton
    </h1>
    <input type="text" v-model="numero"/>
    <h2>{{numero}}</h2>
    <ul v-for="num in 10" :key="num">
       {{numero}} * {{num}} = {{$filters.multiplicar(numero,num)}}

    </ul>
  </div>
</template>

<script>
export default {
name:"TablaSinBotones",
data(){
    return{
        numero:0
    }
}
}
</script>

<style>

</style>
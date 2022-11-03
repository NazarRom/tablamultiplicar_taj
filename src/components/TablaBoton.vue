<template>
  <div>
    <h1>
     Multiplicar con boton
    </h1>
    <label>Introduce un numero: </label>
    <input type="text" v-model="numero" >
    <button @click="getTablaMultiplicar()">Multiplicar</button>
    <ul v-html="html">
        
    </ul>
  </div>
</template>

<script>
export default {
name:"TablaBoton",
data(){
    return{
        numero:0,
        html:""
    }
},
methods:{
    getTablaMultiplicar(){
        var aux = "";
        for(var i = 1;i<=10;i++){
            var mult = this.numero * i;
             aux += "<li>"+this.numero+" * "+ i +" = "+mult+"</li>"
            
        }
        this.html = aux;
    }
}
}
</script>

<style>

</style>
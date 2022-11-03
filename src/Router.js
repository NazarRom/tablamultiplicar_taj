//importas el historial y el router
import { createRouter, createWebHistory } from "vue-router";

//importas los componentes
import TablaBoton from './components/TablaBoton.vue';
import TablaSinBoton from './components/TablaSinBoton.vue';
//constante routes con las rutas dentro
const routes = [
{
    path:"/boton",component:TablaBoton
},
{
    path:"/sinboton",component:TablaSinBoton
}
]

//creamos una constante con el historial
const router = createRouter({
    history:createWebHistory(),
    routes: routes

});

//exportamos
export default router;
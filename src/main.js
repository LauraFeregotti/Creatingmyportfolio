import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import menudetrabajos from './components/carpetasdetrabajos/MenuDeTrabajo.vue';
import ArtPieces from './components/carpetasdetrabajos/ArtPieces.vue';
import CrockeryAttack from './components/carpetasdetrabajos/CrockeryAttack.vue';
import NEXO from './components/carpetasdetrabajos/NEXO.vue';
import Photographyexercise from './components/carpetasdetrabajos/Photographyexercise.vue';
import VisualLanguage from './components/carpetasdetrabajos/VisualLanguage.vue';
import contact from './components/contact.vue';
import about from './components/about.vue';


Vue.use(VueRouter);

const routes =  [
  { path:'/', component: menudetrabajos },
  { path: '/ArtPieces', component: ArtPieces},
  { path: '/CrockeryAttack', component: CrockeryAttack},
  { path: '/NEXO', component: NEXO},
  { path: '/Photographyexercise', component: Photographyexercise},
  { path: '/VisualLanguage', component: VisualLanguage},
  { path: '/contact', component: contact},
  { path: '/about', component: about}
  
];

const router = new VueRouter({
    routes,
    mode: 'history'

}) ;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

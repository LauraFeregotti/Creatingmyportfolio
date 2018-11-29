import Vue from 'vue'
import Router from 'vue-router'
import menudetrabajos from '@/components/carpetasdetrabajos/MenuDeTrabajo.vue'
import ArtPieces from '@/components/carpetasdetrabajos/ArtPieces.vue'
import CrockeryAttack from '@/components/carpetasdetrabajos/CrockeryAttack.vue'
import NEXO from '@/components/carpetasdetrabajos/NEXO.vue'
import Photographyexercise from '@/components/carpetasdetrabajos/Photographyexercise.vue'
import VisualLanguage from '@/components/carpetasdetrabajos/VisualLanguage.vue'
import contact from '@/components/contact.vue'
import about from '@/components/about.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: menudetrabajos
  },
  {
    path: '/ArtPieces',
    component: ArtPieces
  },
  {
    path: '/CrockeryAttack',
    component: CrockeryAttack
  },
  {
    path: '/NEXO',
    component: NEXO
  },
  {
    path: '/Photographyexercise',
    component: Photographyexercise
  },
  {
    path: '/VisualLanguage',
    component: VisualLanguage
  },
  {
    path: '/contact',
    component: contact
  },
  {
    path: '/about',
    component: about
  }
  ]
})

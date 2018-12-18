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
import ElPalacioSalon from '@/components/carpetasdetrabajos/ElPalacioSalon.vue'
import ArgyrosaurusInfographic from '@/components/carpetasdetrabajos/ArgyrosaurusInfographic.vue'
import TekeTeke from '@/components/carpetasdetrabajos/TekeTeke.vue'
import WoodyAllen from '@/components/carpetasdetrabajos/WoodyAllen.vue'
import ParaTiApp from '@/components/carpetasdetrabajos/ParaTiApp.vue'
import ParaTiWebSite from '@/components/carpetasdetrabajos/ParaTiWebSite.vue'
import PUKE from '@/components/carpetasdetrabajos/PUKE.vue'
import ProcessingVideoGame from '@/components/carpetasdetrabajos/ProcessingVideoGame.vue'

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
  },
  {
    path: '/ElPalacioSalon',
    component: ElPalacioSalon
  },
  {
    path: '/ArgyrosaurusInfographic',
    component: ArgyrosaurusInfographic
  },
  {
    path: '/TekeTeke',
    component: TekeTeke
  },
  {
    path: '/WoodyAllen',
    component: WoodyAllen
  },
  {
    path: '/ParaTiApp',
    component: ParaTiApp
  },
  {
    path: '/ParaTiWebSite',
    component: ParaTiWebSite
  },
  {
    path: '/PUKE',
    component: PUKE
  },
  {
    path: '/ProcessingVideoGame',
    component: ProcessingVideoGame
  }

  ]
})

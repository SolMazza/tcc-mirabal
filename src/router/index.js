import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePag.vue'),
  },
  {
    path: '/historia',
    name: 'historia',
    component: () => import('../pages/HistoriaPag.vue'),
  },
  {
    path: '/apoie',
    name: 'apoie',
    component: () => import('../pages/ApoiePag.vue'),
  },
  {
    path:'/acoes',
    name: 'acoes',
    component: () => import('../pages/AcoesPag.vue'),
  },
  {
    path: '/festival-Mirabal',
    name: 'festival-Mirabal',
    component: () => import('../pages/FestivalPag.vue'),
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import('../pages/ContatoPag.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFoundPag.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

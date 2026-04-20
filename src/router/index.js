import { createRouter, createWebHistory } from 'vue-router'


import login from '../views/login.vue'
import RegistroPedidos from '../views/RegistroPedidos.vue'
import TablaInventario from '../views/TablaInventario.vue'
import TableroPedidos from '../views/TableroPedidos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/RegistroPedidos',
      name: 'RegistroPedidos',
      component: RegistroPedidos,
    },
    {
      path: '/TablaInventario',
      name: 'TablaInventario',
      component: TablaInventario,
    },
    {
      path: '/TableroPedidos',
      name: 'TableroPedidos',
      component: TableroPedidos
    }
  ],
})

export default router

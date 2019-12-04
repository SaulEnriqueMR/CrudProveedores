import Vue from 'vue';
import VueRouter from 'vue-router';
import Proveedores from '../views/Proveedores.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/proveedores'
  },
  {
    path: '/proveedores',
    name: 'proveedores',
    component: Proveedores,
  },
  {
    path: '/proveedores/:id',
    name: 'proveedorDetallado',
    alias: '/proveedores',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProveedorDetallado.vue'),
  },
  {
    path: '/articulos',
    name: 'articulos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Articulos.vue')
  },
  {
    path: '/articulos/:id',
    name: 'articuloDetallado',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticuloDetallado.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

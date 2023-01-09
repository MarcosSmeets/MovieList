import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Filme from '../views/Filmes.vue'
import CadastroMovie from '../views/CadastroFilme.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/filmes',
    name: 'filmes',
    component: Filme
  },
  {
    path: '/cadastroFilme',
    name: 'cadastroFilme',
    component: CadastroMovie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

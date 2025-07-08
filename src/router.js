import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./pages/Home.vue')
const Post = () => import('./pages/Post.vue')
const Products = () => import('./pages/Products.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/post', component: Post },
  { path: '/products', component: Products },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 
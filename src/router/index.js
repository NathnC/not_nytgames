import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConnectionsView from '../views/Connections.vue'
import CombinationsView from '../views/Combinations.vue'
import WordleView from '../views/Wordle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/connections',
      name: 'home',
      component: ConnectionsView
    },
    {
      path: '/combinations',
      name: 'home',
      component: CombinationsView
    },
    {
      path: '/wordle',
      name: 'wordle',
      component: WordleView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

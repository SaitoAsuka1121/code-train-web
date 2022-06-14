import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
const router = createRouter({
    history: createWebHistory("/"),
    routes:[
        {   
          name:"Home",
          path: '/',
          component: Home
        },
        {
          path: '/auth/login',
          name: 'Login',
          component: () => import('../views/auth/Login.vue')
        },
        {
          path: '/auth/register',
          name: 'Register',
          component: () => import('../views/auth/Register.vue')
        },
        {
          path: '/problems/list',
          name: 'Problems',
          component: () => import('../views/problems/Problems.vue')
        },
        {
          path: '/problems/showstatus',
          name: 'Showstatus',
          component: () => import('../views/problems/Showstatus.vue')
        },
        {
          path: '/ranklist',
          name: 'Ranklist',
          component: () => import('../views/problems/Ranklist.vue')
        },
        {
          path: '/help',
          name: 'Help',
          component: () => import('../views/help/Help.vue')
        },
        {
          path: '/contest/list',
          name: 'ContestList',
          component: () => import('../views/contest/Contest.vue')
        },
        {
          path:'/contest/:id',
          name:'Contest',
          component:()=>import('../views/contest/components/ContestBody.vue')
        },
        {
          path: '/problem/:id',
          name: 'Problem',
          component: () => import('../views/problems/Components/Problem.vue')
        }
    ]
})
export default router

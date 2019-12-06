import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '../views/Create.vue'
import List from '../views/List.vue'
import Task from '../views/Task.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'create',
    component: Create
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/task/:id',
    name: 'task',
    component: Task
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

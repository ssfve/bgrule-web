import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Detail from '../pages/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/games/:id', component: Detail},
]

export default new VueRouter({
  routes: routes
})

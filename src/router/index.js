import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import essayDetail from '../views/essayDetail/detail'
import Tag from '../views/Tag/tags'
import Category from '../views/Category/category'
import Dic from '../views/Dic/dic'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
  },
    {
      path:'/home',
      name: 'home',
      component:Home,
    },{
      path: '/essay/:id',
      name: 'essayDetail',
      component: essayDetail
    },{
      path: '/tags',
      name: 'tags',
      component: Tag
    },{
      path: '/category',
      name: 'category',
      component: Category
    },{
      path:'/dic',
      name: 'dic',
      component: Dic
    }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router

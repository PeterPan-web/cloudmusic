import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const find =()=>import('views/find/find.vue')
const newmusic =()=>import('views/newmusic/newmusic.vue')
const newmv =()=>import('views/newmv/newmv.vue')
const recommend =()=>import('views/recommend/recommend.vue')
const routes = [
      {
      path:'',
      redirect: '/find'
    },
      { path: '/find', 
      component: find 
    },
    { path: '/newmusic', 
    component: newmusic 
    },
    { path: '/newmv', 
    component: newmv 
    },
    { path: '/recommend', 
    component: recommend 
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

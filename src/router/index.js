import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/string',
      name: 'string',
      component: () => import('../views/StringManipulation.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('../views/Calculator.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/aboutvuetify',
      name: 'aboutvuetify',
      component: () => import('../views/AboutVuetify.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/quizapp',
      name: 'quizapp',
      component: () => import('../views/QuizApp.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/redirect',
      name: 'redirect',
      beforeEnter(to, from, next) {
        window.location.replace("https://vuetifyjs.com/en/introduction/why-vuetify/")
      }
    },
    {
      path: '/spotify',
      name: 'spotify',
      beforeEnter(to, from, next) {
        window.location.replace("https://open.spotify.com/user/31tfv6hv3mr755lhf25i3bcmforu?si=8066a9f7daab4de9")
      }
    },
  ]
})

const getCurrentUser = () => { 
    return new Promise((resolve, reject) =>{
       const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
            removeListener();
            resolve(user);
        },
        reject
       );
    });
}


router.beforeEach(async(to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)){
    if (await getCurrentUser()){
      next();
    }else {
      alert("User must be logged in first!");
      next("/signin");
    }
  }else{
    next();
  }
});

export default router

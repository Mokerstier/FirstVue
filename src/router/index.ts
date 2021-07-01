import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import { auth } from "../firebase";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "Home of awesome stuff"
    },
    component: Home
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "This is me"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/work",
    name: "Work",
    meta: {
      title: "Awesome showcase"
    },
    component: () => import(/* webpackChunkName: "work" */ "../views/Work.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      authRequired: true,
      title: "Managing Awesomeness"
    },
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "Enter Awesomeness"
    },
    component: () => import( /* webpackChunkName: "login" */ "../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta && to.meta.title ? to.meta.title : 'Home';
  if (to.matched.some(record => record.meta.authRequired)) {
    if (auth.currentUser) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});

export default router;

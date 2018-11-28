import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Immortal from "./views/Immortal.vue";
import Mortal from "./views/Mortal.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/immortal",
      name: "immortal",
      component: Immortal
    },
    {
      path: "/mortal",
      name: "mortal",
      component: Mortal
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

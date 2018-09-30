import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Archive from "./views/Archive.vue";
import AboutMe from "./views/AboutMe.vue";
import Links from "./views/Links.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/archive",
      name: "archive",
      component: Archive
    },
    {
      path: "/links",
      name: "links",
      component: Links
    },
    {
      path: "/aboutme",
      name: "aboutMe",
      component: AboutMe
    }
  ]
});

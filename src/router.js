import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Archive from "./views/Archive.vue";
import AboutMe from "./views/AboutMe.vue";
import Links from "./views/Links.vue";
import BlogSearchPage from "./views/BlogSearchPage.vue";
import DetailArticle from "./views/DetailArticle.vue";

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
    },
    {
      path: "/BlogSearchPage",
      name: "blogSearchPage",
      component: BlogSearchPage
    },
    {
      path: "/DetailArticle",
      name: "detailArticle",
      component: DetailArticle
    }
  ]
});

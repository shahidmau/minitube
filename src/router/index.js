import Vue from "vue";
import VueRouter from "vue-router";

import Recents from "../views/Recents.vue";
import Favorites from "../views/Favorites.vue";
import AddVideo from "../views/AddVideo.vue";
import SingleVideo from "../views/SingleVideo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Recents",
    component: Recents
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites
  },
  {
    path: "/add-video",
    name: "AddVideo",
    component: AddVideo
  },
  {
    path: "/video/:videoId",
    name: "SingleVideo",
    component: SingleVideo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  let authorized = true;
  if (to.fullPath === '/add-video' && !authorized) {
    alert("You are not authorized to add video");
    next("/");
  } else {
    next();
  }
});


export default router;

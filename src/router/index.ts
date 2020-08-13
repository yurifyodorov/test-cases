import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/querying",
    name: "Querying",
    // route level code-splitting
    // this generates a separate chunk (querying.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "querying" */ "../views/Querying.vue")
  },
  {
    path: "/traversal",
    name: "Traversal",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Traversal.vue")
  },
  {
    path: "/traversal",
    name: "Traversal",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Traversal.vue")
  },
  {
    path: "/actions/",
    name: "Actions",
    component: () =>
      import(/* webpackChunkName: "actions" */ "../views/Actions.vue"),
  },
  {
    path: "/window",
    name: "Window",
    component: () =>
      import(/* webpackChunkName: "window" */ "../views/Window.vue")
  },
  {
    path: "/viewport",
    name: "Viewport",
    component: () =>
      import(/* webpackChunkName: "viewport" */ "../views/Viewport.vue")
  },
  {
    path: "/location",
    name: "Location",
    component: () =>
      import(/* webpackChunkName: "location" */ "../views/Location.vue")
  },
  {
    path: "/navigation",
    name: "Navigation",
    component: () =>
      import(/* webpackChunkName: "navigation" */ "../views/Navigation.vue")
  },
  {
    path: "/assertions",
    name: "Assertions",
    component: () =>
      import(/* webpackChunkName: "assertions" */ "../views/Assertions.vue")
  },
  {
    path: "/misc",
    name: "Misc",
    component: () =>
      import(/* webpackChunkName: "misc" */ "../views/Misc.vue")
  },
  {
    path: "/connectors",
    name: "Connectors",
    component: () =>
      import(/* webpackChunkName: "connectors" */ "../views/Connectors.vue")
  },
  {
    path: "/aliasing",
    name: "Aliasing",
    component: () =>
      import(/* webpackChunkName: "aliasing" */ "../views/Aliasing.vue")
  },
  {
    path: "/waiting",
    name: "Waiting",
    component: () =>
      import(/* webpackChunkName: "waiting" */ "../views/Waiting.vue")
  },
  {
    path: "/network-requests",
    name: "NetworkRequests",
    component: () =>
      import(/* webpackChunkName: "network-requests" */ "../views/NetworkRequests.vue")
  },
  {
    path: "/files",
    name: "Files",
    component: () =>
      import(/* webpackChunkName: "files" */ "../views/Files.vue")
  },
  {
    path: "/local-storage",
    name: "LocalStorage",
    component: () =>
      import(/* webpackChunkName: "local-storage" */ "../views/LocalStorage.vue")
  },
  {
    path: "/cookies",
    name: "Cookies",
    component: () =>
      import(/* webpackChunkName: "cookies" */ "../views/Cookies.vue")
  },
  {
    path: "/spies-stubs-clocks",
    name: "SpiesStubsClocks",
    component: () =>
      import(/* webpackChunkName: "spies-stubs-clocks" */ "../views/SpiesStubsClocks.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;

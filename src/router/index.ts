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
    path: "/actions",
    name: "Actions",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Actions.vue")
  },
  {
    path: "/window",
    name: "Window",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Window.vue")
  },
  {
    path: "/viewport",
    name: "Viewport",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Viewport.vue")
  },
  {
    path: "/location",
    name: "Location",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Location.vue")
  },
  {
    path: "/navigation",
    name: "Navigation",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Navigation.vue")
  },
  {
    path: "/assertions",
    name: "Assertions",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Assertions.vue")
  },
  {
    path: "/misc",
    name: "Misc",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Misc.vue")
  },
  {
    path: "/connectors",
    name: "Connectors",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Connectors.vue")
  },
  {
    path: "/aliasing",
    name: "Aliasing",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Aliasing.vue")
  },
  {
    path: "/waiting",
    name: "Waiting",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Waiting.vue")
  },
  {
    path: "/network-requests",
    name: "NetworkRequests",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/NetworkRequests.vue")
  },
  {
    path: "/files",
    name: "Files",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Files.vue")
  },
  {
    path: "/local-storage",
    name: "LocalStorage",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/LocalStorage.vue")
  },
  {
    path: "/cookies",
    name: "Cookies",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/Cookies.vue")
  },
  {
    path: "/spies-stubs-clocks",
    name: "SpiesStubsClocks",
    component: () =>
      import(/* webpackChunkName: "traversal" */ "../views/SpiesStubsClocks.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;

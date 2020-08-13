import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

import Home from '../views/Home.vue';
import KitchenSink from '../views/KitchenSink.vue';
import MyFavorites from '../views/MyFavorites.vue';

Vue.use(Router);

class RouteMeta {
  title: string;

  constructor({title}: { title: string }) {
    this.title = title;
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: new RouteMeta({ title: 'Home' })
    },
    {
      path: '/kitchen-sink',
      name: 'kitchen-sink',
      component: KitchenSink,
      meta: new RouteMeta({ title: 'Kitchen Sink' })
    },
    {
      path: '/my-favorites',
      name: 'my-favorites',
      component: MyFavorites,
      meta: new RouteMeta({ title: 'Favorites' })
    }
  ]
});

// This callback runs before every route change, including on initial load
router.beforeEach((to, from, next) => {

  const routeMeta = to.meta as RouteMeta;
  store.dispatch('topToolbar/changeTitle', routeMeta.title);
  next();
});

export default router;
import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

import Home from '../views/Home.vue';

import KitchenSink from '../views/kitchen-sink/index.vue';
import Querying from '../views/kitchen-sink/commands/Querying.vue';
import Traversal from '../views/kitchen-sink/commands/Traversal.vue';
import Actions from '../views/kitchen-sink/commands/Actions.vue';
import Window from '../views/kitchen-sink/commands/Window.vue';
import Viewport from '../views/kitchen-sink/commands/Viewport.vue';
import Location from '../views/kitchen-sink/commands/Location.vue';
import Navigation from '../views/kitchen-sink/commands/Navigation.vue';
import Assertions from '../views/kitchen-sink/commands/Assertions.vue';
import Misc from '../views/kitchen-sink/commands/Misc.vue';
import Connectors from '../views/kitchen-sink/commands/Connectors.vue';
import Aliasing from '../views/kitchen-sink/commands/Aliasing.vue';
import Waiting from '../views/kitchen-sink/commands/Waiting.vue';
import NetworkRequests from '../views/kitchen-sink/commands/NetworkRequests.vue';
import Files from '../views/kitchen-sink/commands/Files.vue';
import LocalStorage from '../views/kitchen-sink/commands/LocalStorage.vue';
import Cookies from '../views/kitchen-sink/commands/Cookies.vue';
import SpiesStubsClocks from '../views/kitchen-sink/commands/SpiesStubsClocks.vue';

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
      name: 'home', component: Home,
      meta: new RouteMeta({ title: 'Home' })
    },
    {
      path: '/kitchen-sink',
      name: 'kitchen-sink',
      component: KitchenSink,
      meta: new RouteMeta({ title: 'Kitchen Sink' }),
      children: [
        {
          path: 'querying', component: Querying,
          meta: new RouteMeta({ title: 'Querying' })
        },
        {
          path: 'traversal', component: Traversal,
          meta: new RouteMeta({ title: 'Traversal' })
        },
        {
          path: 'actions', component: Actions,
          meta: new RouteMeta({ title: 'Actions' })
        },
        {
          path: 'window', component: Window,
          meta: new RouteMeta({ title: 'Window' })
        },
        {
          path: 'viewport', component: Viewport,
          meta: new RouteMeta({ title: 'Viewport' })
        },
        {
          path: 'location', component: Location,
          meta: new RouteMeta({ title: 'Location' })
        },
        {
          path: 'navigation', component: Navigation,
          meta: new RouteMeta({ title: 'Navigation' })
        },
        {
          path: 'assertions', component: Assertions,
          meta: new RouteMeta({ title: 'Assertions' })
        },
        {
          path: 'misc', component: Misc,
          meta: new RouteMeta({ title: 'Misc' })
        },
        {
          path: 'connectors', component: Connectors,
          meta: new RouteMeta({ title: 'Connectors' })
        },
        {
          path: 'aliasing', component: Aliasing,
          meta: new RouteMeta({ title: 'Aliasing' })
        },
        {
          path: 'waiting', component: Waiting,
          meta: new RouteMeta({ title: 'Waiting' })
        },
        {
          path: 'network-requests', component: NetworkRequests,
          meta: new RouteMeta({ title: 'Network Requests' })
        },
        {
          path: 'files', component: Files,
          meta: new RouteMeta({ title: 'Files' })
        },
        {
          path: 'local-storage', component: LocalStorage,
          meta: new RouteMeta({ title: 'Local Storage' })
        },
        {
          path: 'cookies', component: Cookies,
          meta: new RouteMeta({ title: 'Cookies' })
        },
        {
          path: 'spies-stubs-clocks', component: SpiesStubsClocks,
          meta: new RouteMeta({ title: 'Spies, Stubs & Clocks' })
        }
      ]
    },
    {
      path: '/my-cases',
      name: 'my-cases',
      component: MyFavorites,
      meta: new RouteMeta({ title: 'Му cases' })
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
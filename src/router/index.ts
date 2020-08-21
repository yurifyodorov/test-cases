import Vue from "vue";
import Router from "vue-router";
import store from "../store";

Vue.use(Router);

class RouteMeta {
  title: string;

  constructor({ title }: { title: string }) {
    this.title = title;
  }
}

const commands = "@/views/commands";

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
      meta: new RouteMeta({ title: "Tester's reference" })
    },
    {
      path: "/done",
      name: "done",
      component: () => import("@/views/DonePage.vue"),
      meta: new RouteMeta({ title: "Done" })
    },
    {
      path: "/progress",
      name: "progress",
      component: () => import(`@/views/ProgressPage.vue`),
      meta: new RouteMeta({ title: "In progress" })
    },
    {
      path: "/waiting",
      name: "waiting",
      component: () => import(`@/views/WaitingPage.vue`),
      meta: new RouteMeta({ title: "Waiting" })
    },
    {
      path: "/commands",
      name: "commands",
      component: () => import(`@/views/CommandsPage.vue`),
      meta: new RouteMeta({ title: "Commands list" }),
      children: [
        {
          path: "get",
          component: () => import(`${commands}/Get.vue`),
          meta: new RouteMeta({ title: "cy.get()" })
        },
        {
          path: "contains",
          component: () => import(`${commands}/Contains.vue`),
          meta: new RouteMeta({ title: "cy.contains()" })
        },
        {
          path: "within",
          component: () => import(`${commands}/Within.vue`),
          meta: new RouteMeta({ title: ".within()" })
        },
        {
          path: "root",
          component: () => import(`${commands}/Root.vue`),
          meta: new RouteMeta({ title: "cy.root()" })
        },
        {
          path: "children",
          component: () => import(`${commands}/Children.vue`),
          meta: new RouteMeta({ title: ".children()" })
        },
        {
          path: "closest",
          component: () => import(`${commands}/Closest.vue`),
          meta: new RouteMeta({ title: ".closest()" })
        },
        {
          path: "eq",
          component: () => import(`${commands}/Eq.vue`),
          meta: new RouteMeta({ title: ".eq()" })
        },
        {
          path: "filter",
          component: () => import(`${commands}/Filter.vue`),
          meta: new RouteMeta({ title: ".filter()" })
        },
        {
          path: "find",
          component: () => import(`${commands}/Find.vue`),
          meta: new RouteMeta({ title: ".find()" })
        },
        {
          path: "first",
          component: () => import(`${commands}/First.vue`),
          meta: new RouteMeta({ title: ".first()" })
        },
        {
          path: "last",
          component: () => import(`${commands}/Last.vue`),
          meta: new RouteMeta({ title: ".last()" })
        },
        {
          path: "next",
          component: () => import(`${commands}/Next.vue`),
          meta: new RouteMeta({ title: ".next()" })
        },
        {
          path: "nextAll",
          component: () => import(`${commands}/NextAll.vue`),
          meta: new RouteMeta({ title: ".nextAll()" })
        },
        {
          path: "nextUntil",
          component: () => import(`${commands}/NextUntil.vue`),
          meta: new RouteMeta({ title: ".nextUntil()" })
        },
        {
          path: "not",
          component: () => import(`${commands}/Not.vue`),
          meta: new RouteMeta({ title: ".not()" })
        },
        {
          path: "parent",
          component: () => import(`${commands}/Parent.vue`),
          meta: new RouteMeta({ title: ".parent()" })
        },
        {
          path: "parents",
          component: () => import(`${commands}/Parents.vue`),
          meta: new RouteMeta({ title: ".parents()" })
        },
        {
          path: "parentsUntil",
          component: () => import(`${commands}/ParentsUntil.vue`),
          meta: new RouteMeta({ title: ".parentsUntil()" })
        },
        {
          path: "prev",
          component: () => import(`${commands}/Prev.vue`),
          meta: new RouteMeta({ title: ".prev()" })
        },
        {
          path: "prevAll",
          component: () => import(`${commands}/PrevAll.vue`),
          meta: new RouteMeta({ title: ".prevAll()" })
        },
        {
          path: "prevUntil",
          component: () => import(`${commands}/PrevUntil.vue`),
          meta: new RouteMeta({ title: ".prevUntil()" })
        },
        {
          path: "siblings",
          component: () => import(`${commands}/Siblings.vue`),
          meta: new RouteMeta({ title: ".siblings()" })
        }
      ]
    }
  ]
});

// This callback runs before every route change, including on initial load
router.beforeEach((to, from, next) => {
  const routeMeta = to.meta as RouteMeta;
  store.dispatch("topToolbar/changeTitle", routeMeta.title);
  next();
});

export default router;

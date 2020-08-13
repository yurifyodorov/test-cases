import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});

// FIXME: есть сомнения насчет правильности,
// когда выше уже объявляется new Vuex.Store
export const store = Vue.observable({
  isNavOpen: false
});

export const mutations = {
  setIsNavOpen(yesno: boolean) {
    store.isNavOpen = yesno;
  },
  toggleNav() {
    store.isNavOpen = !store.isNavOpen;
  }
};

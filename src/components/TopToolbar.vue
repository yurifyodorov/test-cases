<template>
  <div>
    <v-navigation-drawer app fixed v-model="showMenu">
      <p>main nav</p>
    </v-navigation-drawer>

    <v-app-bar app fixed dark color="primary">
      <v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
      
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import pagesService from "../services/pagesService";
import PageList from "./PageList.vue";
import { Category, ExamplePage } from "../types";

@Component({
  components: {
    PageList
  }
})
export default class TopToolbar extends Vue {
  @Getter("title", { namespace: "topToolbar" }) title!: string;

  examplesPages: ExamplePage[] = [];

  mounted() {
    pagesService
      .getPagesByType(Category.KitchenSink)
      .then((examplesPages: ExamplePage[]) => {
        this.examplesPages = examplesPages;
      });
  }

  showMenu: boolean = false;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  doNothing(): void {}
}
</script>

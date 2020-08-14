<template>
  <div>
    <v-alert type="info">
      В этом разделе будут примеры тестов с
      <a href="https://example.cypress.io/">https://example.cypress.io/</a>
      с применением BDD подхода
    </v-alert>

    <p>
      <!-- TODO: выводить циклом, данные брать из pages.json -->
      <router-link to="/kitchen-sink/querying">Querying</router-link> |
      <router-link to="/kitchen-sink/traversal">Traversal</router-link> |
      <router-link to="/kitchen-sink/actions">Actions</router-link> |
      <router-link to="/kitchen-sink/window">Window</router-link> |
      <router-link to="/kitchen-sink/viewport">Viewport</router-link> |
      <router-link to="/kitchen-sink/location">Location</router-link> |
      <router-link to="/kitchen-sink/navigation">Navigation</router-link> |
      <router-link to="/kitchen-sink/assertions">Assertions</router-link> |
      <router-link to="/kitchen-sink/misc">Misc</router-link> |
      <router-link to="/kitchen-sink/connectors">Connectors</router-link> |
      <router-link to="/kitchen-sink/aliasing">Aliasing</router-link> |
      <router-link to="/kitchen-sink/waiting">Waiting</router-link> |
      <router-link to="/kitchen-sink/network-requests">Network Requests</router-link> |
      <router-link to="/kitchen-sink/files">Files</router-link> |
      <router-link to="/kitchen-sink/local-storage">Local Storage</router-link> |
      <router-link to="/kitchen-sink/cookies">Cookies</router-link> |
      <router-link to="/kitchen-sink/spies-stubs-clocks">Spies, Stubs & Clocks</router-link>
    </p>

    <router-view></router-view>

    <PageList :examplesPages="examplesPages"></PageList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import pagesService from "../../services/pagesService";
import PageList from "../../components/PageList.vue";
import { Category, ExamplePage } from "../../types";

@Component({
  components: {
    PageList
  }
})
export default class Home extends Vue {
  examplesPages: ExamplePage[] = [];

  mounted() {
    pagesService
      .getPagesByType(Category.KitchenSink)
      .then((examplesPages: ExamplePage[]) => {
        this.examplesPages = examplesPages;
      });
  }
}
</script>

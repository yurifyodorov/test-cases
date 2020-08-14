<template>
  <div>
    <v-alert type="info">
      В этом разделе будут примеры тестов с
      <a href="https://example.cypress.io/">https://example.cypress.io/</a>
      с применением BDD подхода
    </v-alert>

    <p>
      <router-link to="/kitchen-sink/querying">querying</router-link> |
      <router-link to="/kitchen-sink/traversal">traversal</router-link>
    </p>

    <router-view></router-view>
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

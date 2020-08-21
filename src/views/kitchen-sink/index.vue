<template>
  <div>
    <v-card class="d-flex flex-wrap" color="grey lighten-2" flat tile>
      <v-card
        v-for="examplePage in examplesPages"
        :key="examplePage.id"
        :to="'/kitchen-sink/' + examplePage.slug"
        style="width: 200px;"
        class="pa-2"
        outlined
        tile
      >
        <v-icon>{{ examplePage.icon }}</v-icon> {{ examplePage.title }}
      </v-card>
    </v-card>
    <v-container class="grey lighten-5">
      <v-card>
        <router-view></router-view>
      </v-card>
    </v-container>
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

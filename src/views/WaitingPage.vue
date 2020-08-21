<template>


  <!-- TODO: перенести в App.vue -->

  <v-card class="grey lighten-5">
    <v-row no-gutters style="flex-wrap: nowrap;">
      <v-col cols="4" class="flex-grow-0 flex-shrink-0">
        <v-card class="pa-2" outlined tile>
          <PageList :examplesPages="examplesPages"></PageList>
        </v-card>
      </v-col>
      <v-col
        cols="1"
        style="min-width: 100px; max-width: 100%;"
        class="flex-grow-1 flex-shrink-0"
      >
        <v-card class="pa-2" outlined tile>
          <router-view />
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import pagesService from "../services/pagesService";
import PageList from "../components/PageList.vue";
import { Category, ExamplePage } from "../types";

@Component({
  components: {
    PageList
  }
})
export default class WaitingPage extends Vue {
  examplesPages: ExamplePage[] = [];

  mounted() {
    pagesService.getWaitingPages().then((examplesPages: ExamplePage[]) => {
      this.examplesPages = examplesPages;
    });
  }
}
</script>

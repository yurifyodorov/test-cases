<template>
  <div>
    <v-list
      dense
      v-for="examplePage in examplesPages"
      :key="examplePage.id"
    >
      <v-list-item :to="'/kitchen-sink/commands/' + examplePage.slug">
        <v-list-item-action>
          <v-icon>{{ examplePage.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ examplePage.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ExamplePage } from "../types";

@Component
export default class PageList extends Vue {
  @Prop({ type: Array, required: true }) examplesPages!: ExamplePage[];
}
</script>

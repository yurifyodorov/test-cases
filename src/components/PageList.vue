<template>
  <div>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 v-for="examplePage in examplesPages" :key="examplePage.id">
          <v-card :to="{ name: 'querying'}">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs9>
                  <div>
                    <div class="subheading font-weight-medium">
                      {{ examplePage.title }}
                    </div>
                    <div>{{ examplePage.dateString }}</div>
                    <div>{{ examplePage.content }}</div>
                  </div>
                </v-flex>
                <v-flex xs3>
                  <v-img
                    contain
                    :src="`/thumbnails/${examplePage.baseImageName}.png`"
                    :srcset="`/thumbnails/${examplePage.baseImageName}.png 1x,
                             /thumbnails/${examplePage.baseImageName}@2x.png 2x`"
                    height="72px"
                    transition="false"
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { ExamplePage } from '../types';

  @Component
  export default class PageList extends Vue {
    @Prop({ type: Array, required: true }) examplesPages!: ExamplePage[];
  }
</script>

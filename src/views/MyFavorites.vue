<template>

  <div>
    <PageList :examplesPages="examplesPages"></PageList>
  </div>

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import pagesService from '../services/pagesService';
  import PageList from '../components/PageList.vue';
  import { PageType, ExamplePage } from '../types';

  @Component({
    components: {
      PageList
    }
  })
  export default class Home extends Vue {
    examplesPages: ExamplePage[] = [];

    mounted() {
      pagesService.getFavorites()
        .then((examplesPages: ExamplePage[]) => {
          this.examplesPages = examplesPages;
        });
    }
  }
</script>

<template>
  <div>
    <v-alert type="info">
      В этом разделе будут примеры тестов с <a href="https://example.cypress.io/">https://example.cypress.io/</a>
      с применением BDD подхода
    </v-alert>
    <NewsList :newsArticles="newsArticles"></NewsList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import newsService from "../services/newsService";
import NewsList from "../components/NewsList.vue";
import { ArticleType, NewsArticle } from "../types";

@Component({
  components: {
    NewsList
  }
})
export default class TopStories extends Vue {
  newsArticles: NewsArticle[] = [];

  mounted() {
    newsService
      .getArticlesByType(ArticleType.CodeExample)
      .then((newsArticles: NewsArticle[]) => {
        this.newsArticles = newsArticles;
      });
  }
}
</script>

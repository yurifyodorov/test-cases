<template>

  <v-bottom-navigation
    app
    fixed
    grow
    v-model="activeItem"
    color="primary"
  >
    <v-btn value="home" :to="{ path: '/'}">
      <span>Done</span>
      <v-icon>thumb_up</v-icon>
    </v-btn>

    <v-btn value="progress" :to="{ name: 'progress'}">
      <span>In progress</span>
      <v-icon>code</v-icon>
    </v-btn>

    <v-btn value="waiting" :to="{ name: 'waiting'}">
      <span>Waiting</span>
      <v-icon>favorite</v-icon>
    </v-btn>
  </v-bottom-navigation>

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class BottomNav extends Vue {
    activeItem: string = 'top';
  }
</script>
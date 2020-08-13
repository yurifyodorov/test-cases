<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/querying">Querying</router-link> |
      <router-link to="/traversal">Traversal</router-link> |
      <router-link to="/actions">Actions</router-link> |
      <router-link to="/window">Window</router-link> |
      <router-link to="/viewport">Viewport</router-link> |
      <router-link to="/location">Location</router-link> |
      <router-link to="/navigation">Navigation</router-link> |
      <router-link to="/assertions">Assertions</router-link> |
      <router-link to="/misc">Misc</router-link> |
      <router-link to="/connectors">Connectors</router-link> |
      <router-link to="/aliasing">Aliasing</router-link> |
      <router-link to="/waiting">Waiting</router-link> |
      <router-link to="/network-requests">Network Requests</router-link> |
      <router-link to="/files">Files</router-link> |
      <router-link to="/local-storage">Local Storage</router-link> |
      <router-link to="/cookies">Cookies</router-link> |
      <router-link to="/spies-stubs-clocks">Spies, Stubs & Clocks</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

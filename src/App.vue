<template>
  <div id="app">
    <nav class="main-nav">
      <div class="logo">Test cases</div>
      <Burger></Burger>
    </nav>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/querying">Querying</router-link>
        <router-link to="/actions">Actions</router-link>
        <router-link to="/window">Window</router-link>
        <router-link to="/viewport">Viewport</router-link>
        <router-link to="/location">Location</router-link>
        <router-link to="/navigation">Navigation</router-link>
        <router-link to="/assertions">Assertions</router-link>
        <router-link to="/misc">Misc</router-link>
        <router-link to="/connectors">Connectors</router-link>
        <router-link to="/aliasing">Aliasing</router-link>
        <router-link to="/waiting">Waiting</router-link>
        <router-link to="/network-requests">Network Requests</router-link>
        <router-link to="/files">Files</router-link>
        <router-link to="/local-storage">Local Storage</router-link>
        <router-link to="/cookies">Cookies</router-link>
        <router-link to="/spies-stubs-clocks"
          >Spies, Stubs & Clocks</router-link
        >
      </ul>
    </Sidebar>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Burger from "./components/Menu/Burger.vue";
import Sidebar from "./components/Menu/Sidebar.vue";

export default {
  name: "app",
  components: {
    Burger,
    Sidebar
  }
};
</script>

<style lang="scss">
html {
  height: 100%;
  overflow: hidden;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: rgb(101, 31, 87);
  background: linear-gradient(
    45deg,
    rgba(101, 31, 87, 1) 0%,
    rgba(225, 113, 87, 1) 48%,
    rgba(249, 248, 113, 1) 100%
  );
}

.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: "Lato";
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
  background-color: rgba(0, 0, 0, 0.2);
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}

.main-content {
  // FIXME: выглядит нормально только на больших экранах
  margin-left: 340px; // equal aside width
  margin-right: 340px; // for symmetry
  padding: 0 40px;

  h1 {
    color: #fff;
  }
}
</style>

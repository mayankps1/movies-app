<template>
  <div id="app">
    <div id="nav">
      <nav-bar></nav-bar>
      
    </div>
    <router-view />
  </div>
</template>

<script>

import NavBar from "@/components/NavBar.vue";
export default {
  name: "app",
  components: {
    "nav-bar": NavBar,
  },
 
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
 
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>



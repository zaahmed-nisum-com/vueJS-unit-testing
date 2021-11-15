<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Header /> -->
    <!-- <Home /> -->
    <ToDo title="My List" />
  </div>
</template>

<script>
// import Header from "./components/Header";
// import Home from "./pages/Home/Home.vue";
import ToDo from "./components/ToDo";

export default {
  name: "App",
  components: {
    // Header,
    // Home,
    ToDo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

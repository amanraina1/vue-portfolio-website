<template>
  <Nav />
  <Header />
  <About />
</template>
<script>
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
export default {
  name: "App",
  components: {
    Nav,
    Header,
    About,
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
</style>

<template>
  <Nav />
  <Header />
  <About />
  <Experience />
  <Projects />
  <Footer />
</template>
<script>
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Nav,
    Header,
    About,
    Experience,
    Projects,
    Footer,
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  /* background-color: rgb(241, 241, 241); */
}
</style>

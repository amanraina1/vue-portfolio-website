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
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background-color: #ffffff65;
  /* border-radius: 10px; */
}
::-webkit-scrollbar-thumb {
  background-color: cornflowerblue;
  /* border-radius: 10px; */
}
</style>

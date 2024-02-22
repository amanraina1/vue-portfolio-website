<template>
  <nav class="nav-container" id="nav">
    <div class="nav-brand">Aman Raina</div>
    <ul class="non-bullet">
      <a href="#about">
        <li>About</li>
      </a>
      <a href="#experience">
        <li>Experience</li>
      </a>
      <a href="#projects">
        <li>Projects</li>
      </a>
      <a href="#footer">
        <li class="no-style">Contact</li>
      </a>
    </ul>
  </nav>
  <!-- Hamburger-menu -->
  <nav id="hamburger-nav">
    <div class="nav-brand">Aman Raina</div>
    <div class="hamburger-menu">
      <div
        :class="{ open: showMenu }"
        @click="showMenu = !showMenu"
        class="hamburger-icon"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        class="menu-links"
        :class="{ open: showMenu }"
        @click="showMenu = !showMenu"
      >
        <li>
          <a href="#about">About </a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </div>
    </div>
  </nav>
  <span class="arrow">
    <a href="#about"><img src="../Images/arrow.svg" alt="" /></a>
  </span>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style scoped>
/* With hamburger css */
.arrow img {
  width: 30px;
  position: absolute;
  right: 10px;
  bottom: 20px;
}
#hamburger-nav {
  display: none;
}

.hamburger-menu {
  position: relative;
  display: inline-block;
}

.hamburger-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  cursor: pointer;
}

.hamburger-icon span {
  width: 100%;
  height: 2px;
  background-color: black;
  transition: all 0.3 ease-in-out;
}

.menu-links {
  position: absolute;
  top: 140%;
  right: 0;
  z-index: 3;
  background-color: rgb(217, 217, 217);
  border-radius: 20px;
  width: fit-content;
  color: #383737;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3 ease-in-out;
}

.menu-links a {
  display: block;
  padding: 10px;
  text-align: center;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
  transition: all 0.3 ease-in-out;
}

.menu-links li {
  list-style: none;
}

.menu-links.open {
  max-height: 300px;
  border: 1px solid black;
}

.hamburger-icon.open span:first-child {
  transform: rotate(45deg) translate(10px, 5px);
}

.hamburger-icon.open span:last-child {
  transform: rotate(-45deg) translate(10px, -5px);
}

.hamburger-icon.open span:nth-child(2) {
  opacity: 0;
}

.hamburger-icon span:first-child {
  transform: none;
}

.hamburger-icon span:first-child {
  opacity: 1;
}

.hamburger-icon span:first-child {
  transform: none;
}

/* Media Queries */
@media screen and (max-width: 1200px) {
  #nav {
    display: none;
  }

  #hamburger-nav {
    display: flex;
    width: 100%;
  }
}

/* Without hamburger css */
nav,
.nav-links {
  display: flex;
  /* background-color: red; */
}

nav {
  justify-content: space-around;
  align-items: center;
  height: 17vh;
}

.nav-container {
  /* margin-top: 5vh; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: cornflowerblue;
  width: 100%;
  height: 17vh;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
}

.nav-brand {
  font-size: 2.4rem;
  font-weight: 300;
  cursor: default;
  color: #383737;
  letter-spacing: 0.1em;
}

.non-bullet {
  list-style: none;
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
}

.non-bullet a li:hover {
  cursor: pointer;
  text-decoration: underline;
  transform: scale(1.1);
  transition: all 0.4s ease;
  color: #f6f6f6;
  text-underline-offset: 1rem;
  /* text-decoration-color: rgb(181, 181, 181); */
}

.nav-container ul a {
  text-decoration: none;
  color: black;
}
</style>

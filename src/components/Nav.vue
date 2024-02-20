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
</template>
<script>
export default {
  name: "Nav",
};
</script>
<style scoped>
.nav-container {
  /* margin-top: 5vh; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: cornflowerblue;
  width: 100%;
  height: 20vh;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
}
.nav-brand {
  font-size: 2.4em;
  font-weight: 300;
  cursor: pointer;
  color: #f6f6f6;
  letter-spacing: 3px;
}
.non-bullet {
  list-style: none;
  display: flex;
  gap: 40px;
  font-size: 1.4em;
  font-weight: 500;
}
.non-bullet a li:hover {
  cursor: pointer;
  text-decoration: underline;
  transform: scale(1.1);
  transition: all 0.4s ease;
  color: #f6f6f6;
}
.nav-container ul a {
  text-decoration: none;
  color: black;
}
</style>

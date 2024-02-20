<template>
  <nav class="nav-container">
    <div class="nav-brand">Aman Raina</div>
    <ul class="non-bullet">
      <li>About</li>
      <li>Experience</li>
      <li>Projects</li>
      <li>Contact</li>
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
.non-bullet li:hover {
  cursor: pointer;
  text-decoration: underline;
  transform: scale(1.1);
  transition: all 0.4s ease;
  color: #f6f6f6;
}
</style>

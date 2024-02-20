<template>
  <div class="container">
    <div class="top">
      <div class="light-text">Browse My Recent</div>
      <div class="dark-text">Projects</div>
    </div>
    <div class="bottom">
      <div class="border">
        <div class="image">
          <img src="../Images/Hero Image.svg" alt="Project photo" />
        </div>
        <div class="project-number">Project One</div>
        <div class="links">
          <button>Github</button>
        </div>
      </div>
      <div class="border">
        <div class="image">
          <img src="../Images/Hero Image.svg" alt="Project photo" />
        </div>
        <div class="project-number">Project Two</div>
        <div class="links">
          <button>Github</button>
        </div>
      </div>
      <div class="border">
        <div class="image">
          <img src="../Images/Hero Image.svg" alt="Project photo" />
        </div>
        <div class="project-number">Project Three</div>
        <div class="links">
          <button>Github</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style scoped>
.container {
  margin-top: 10vh;
  height: 90vh;
  /* background-color: #f6f6f6; */
  /* background-color: red; */
}

.top .light-text {
  color: rgb(65, 64, 64);
  font-size: large;
}

.top .dark-text {
  color: black;
  font-size: 59.2px;
}

.top {
  /* background-color: blue; */
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.bottom {
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  padding: 80px;
}

.bottom .border {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 30px;
  border: 2px solid black;
  height: 450px;
  width: 350px;
}

.bottom .border .image {
  border: 2px solid black;
  margin-top: 20px;
  border-radius: 30px;
  width: 250px;
  height: 250px;
  overflow: hidden;
}

.bottom .border .image img {
  width: 250px;
  height: 200px;
}

.bottom .border .project-number {
  /* color: red; */
  font-size: 30px;
  font-weight: 700;
  margin: 10px;
}

.bottom .border .links button {
  border: 2px solid black;
  background-color: #fff;
  padding: 10px 35px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
}

.bottom .border .links button:hover {
  background-color: rgb(65, 64, 64);
  color: rgb(241, 241, 241);
}
</style>

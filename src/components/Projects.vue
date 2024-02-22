<template>
  <div class="container" id="projects">
    <div class="top">
      <div class="light-text">Browse My Recent</div>
      <div class="dark-text">Projects</div>
    </div>
    <div class="bottom">
      <div class="border">
        <div class="image">
          <img src="../Images/vue-restaurant.png" alt="Project photo" />
        </div>
        <div class="project-number">Restaurant App</div>
        <div class="links">
          <a
            target="_blank"
            href="https://x.com/amanraina9086/status/1759970457241993423?s=20"
          >
            <button>Demo Video</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/amanraina1/vue-restaurant-app"
          >
            <button>Github</button>
          </a>
        </div>
      </div>
      <div class="border">
        <div class="image">
          <img src="../Images/todo.png" alt="Project photo" />
        </div>
        <div class="project-number">Todo App</div>
        <div class="links">
          <a
            target="_blank"
            href="https://x.com/amanraina9086/status/1743617412790944020?s=20"
          >
            <button>Demo Video</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/amanraina1/task-manager-app"
          >
            <button>Github</button>
          </a>
        </div>
      </div>
      <div class="border">
        <div class="image">
          <img src="../Images/vue-expenseTracker.png" alt="Project photo" />
        </div>
        <div class="project-number">Expense Tracker</div>
        <div class="links">
          <a
            target="_blank"
            href="https://x.com/amanraina9086/status/1759969318333276443?s=20"
          >
            <button>Demo Video</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/amanraina1/expense-tracker"
          >
            <button>Github</button>
          </a>
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
@media screen and (max-width: 1200px) {
  .container {
    margin-top: 10vh;
    height: 190vh;
    width: 100vw;
    /* background-color: #f6f6f6; */
    /* background-color: red; */
  }

  .top .light-text {
    color: rgb(65, 64, 64);
    font-size: large;
    letter-spacing: 0.2rem;
  }

  .top .dark-text {
    color: black;
    font-size: 2.7rem;
  }
  .top {
    /* background-color: blue; */
    width: 100vw;
    height: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .bottom {
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 80px; */
    /* background-color: green; */
  }

  .bottom .border {
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 30px;
    border: 2px solid black;
    height: 450px;
    width: 350px;
    margin-bottom: 3rem;
    margin-top: 3rem;
  }

  .bottom .border .image {
    /* border: 2px solid black; */
    margin-top: 20px;
    border-radius: 30px;
    width: 300px;
    height: 250px;
    overflow: hidden;
  }

  .bottom .border .image img {
    object-fit: cover;
    transform: translateY(20%);
    width: 100%;
    scale: 1.9;
    /* width: 250px;
  height: 200px; */
  }

  .bottom .border .project-number {
    /* color: red; */
    font-size: 30px;
    font-weight: 700;
    margin: 10px;
  }
  .bottom .border .links {
    /* background-color: red; */
    width: 100%;
    display: flex;
    justify-content: space-evenly;
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
}

@media screen and (min-width: 1200px) {
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
    /* border: 2px solid black; */
    margin-top: 20px;
    border-radius: 30px;
    width: 300px;
    height: 250px;
    overflow: hidden;
  }

  .bottom .border .image img {
    object-fit: cover;
    transform: translateY(20%);
    width: 100%;
    scale: 1.9;
    /* width: 250px;
  height: 200px; */
  }

  .bottom .border .project-number {
    /* color: red; */
    font-size: 30px;
    font-weight: 700;
    margin: 10px;
  }
  .bottom .border .links {
    /* background-color: red; */
    width: 100%;
    display: flex;
    justify-content: space-evenly;
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
}
</style>

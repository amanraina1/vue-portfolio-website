<template>
  <div class="container" id="about">
    <div class="top-container">
      <div class="light-text">Get To Know More</div>
      <div class="dark-text">About Me</div>
    </div>
    <div class="bottom-container">
      <div class="left-container">
        <div class="img-container">
          <img src="../Images/Hero Image.svg" alt="" />
        </div>
      </div>
      <div class="right-container">
        <div class="top">
          <div class="left-box">
            <span>
              <img src="../Images/award_icon.svg" alt="award-icon" />
            </span>
            <span>Fresher</span>
            <span>Looking for opportunities</span>
            <span>Full Stack Development</span>
          </div>
          <div class="right-box">
            <span>
              <img src="../Images/study_icon.svg" alt="award-icon" />
            </span>
            <span>Education</span>
            <span>B.Tech Bachelor's Degree</span>
            <span>College of Technology, Pantnagar</span>
          </div>
        </div>
        <span class="bottom">
          Hi, Being an adult, I possess new and innovative ideas. I have the
          dedication and determination towards work. I am able to adapt myself
          to the requirements of the organizations. And being a fresher i need a
          platform to explore my knowledge. Therefore, I hope your requirements
          and my needs will match. have worked in various projects in as you can
          see in my resume.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
@media screen and (max-width: 1200px) {
  .container {
    /* margin-top: 10vh; */
    height: 100vh;
    width: 100vw;
    /* background-color: red; */
  }

  .top-container .light-text {
    color: rgb(65, 64, 64);
    font-size: large;
  }

  .top-container .dark-text {
    color: black;
    font-size: 3.7rem;
  }

  .top-container {
    /* background-color: green; */
    width: 100vw;
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
  }

  .bottom-container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 90%;
    /* background-color: green; */
  }

  .bottom-container .left-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 30%;
    padding: 1rem;
    /* background-color: blue; */
  }

  .bottom-container .left-container .img-container {
    background-color: grey;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    /* height: 400px; */
  }

  .bottom-container .left-container .img-container img {
    max-width: 15rem;
  }

  .right-container .top .left-box span img {
    width: 30px;
  }

  .bottom-container .right-container {
    width: 100vw;
    height: 70%;
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bottom-container .right-container .top {
    /* background-color: yellow; */
    width: 100vw;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
  }

  .right-container .top .right-box span img {
    width: 2rem;
  }

  .bottom-container .right-container .left-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
    padding: 1rem 4rem;
    border: 2px solid black;
    border-radius: 20px;
    margin: 1rem;
  }

  .bottom-container .right-container .right-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
    padding: 1rem 4rem;
    border: 2px solid black;
    border-radius: 20px;
    margin: 1rem;
  }

  .bottom-container .right-container .bottom {
    /* background-color: red; */
    padding: auto;
    width: 90vw;
    height: 30%;
    /* text-align: center; */
    /* width: 65%; */
    word-break: break-all;
    /* line-height: 125%; */
    font-size: large;
    color: rgb(90, 89, 89);
  }
}
@media screen and (min-width: 1200px) {
  .container {
    margin-top: 10vh;
    height: 90vh;
    background-color: red;
  }

  .top-container .light-text {
    color: rgb(65, 64, 64);
    font-size: large;
  }

  .top-container .dark-text {
    color: black;
    font-size: 3.7rem;
  }

  .top-container {
    /* background-color: green; */
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .bottom-container {
    display: flex;
    width: 100%;
    height: 80%;
  }

  .bottom-container .left-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
  }

  .bottom-container .left-container .img-container {
    background-color: rgb(137, 137, 137);
    border-radius: 30px;
    padding: 20px;
    height: 400px;
  }

  .bottom-container .left-container .img-container img {
    max-width: 450px;
  }

  .right-container .top .left-box span img {
    width: 30px;
  }

  .bottom-container .right-container {
    /* background-color: blue; */
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bottom-container .right-container .top {
    /* background-color: green; */
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .right-container .top .right-box span img {
    width: 30px;
  }

  .bottom-container .right-container .left-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 30px 70px;
    border: 2px solid black;
    border-radius: 20px;
    margin: 20px;
  }

  .bottom-container .right-container .right-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 30px 40px;
    border: 2px solid black;
    border-radius: 20px;
    margin: 20px;
  }

  .bottom-container .right-container .bottom {
    /* background-color: red; */
    padding: auto;
    /* text-align: center; */
    width: 65%;
    word-break: break-all;
    line-height: 125%;
    font-size: large;
    color: rgb(90, 89, 89);
  }
}
</style>

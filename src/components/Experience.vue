<template>
  <div class="container">
    <div class="top">
      <div class="light-text">Get To Know More</div>
      <div class="dark-text">About Me</div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="border">
          <span class="heading">Frontend Development</span>
          <div class="footer">
            <div class="skills">
              <img src="../Images/check.svg" />
              <div class="box">
                <span class="dark-text">HTML</span>
                <span class="light-text">Experienced</span>
              </div>
            </div>
            <div class="skills">
              <img src="../Images/check.svg" />
              <div class="box">
                <span class="dark-text">CSS</span>
                <span class="light-text">Experienced</span>
              </div>
            </div>
            <div class="skills">
              <img src="../Images/check.svg" />
              <div class="box">
                <span class="dark-text">JavaScript</span>
                <span class="light-text">Experienced</span>
              </div>
            </div>
            <div class="skills">
              <img src="../Images/check.svg" />
              <div class="box">
                <span class="dark-text">Vue</span>
                <span class="light-text">Experienced</span>
              </div>
            </div>
            <div class="skills">
              <img src="../Images/check.svg" />
              <div class="box">
                <span class="dark-text">Tailwind CSS</span>
                <span class="light-text">Experienced</span>
              </div>
            </div>
            <div class="skills">
              <img src="../Images/check.svg" />
              <div class="box">
                <span class="dark-text">React</span>
                <span class="light-text">Experienced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="border">
          <span class="heading">Backend Development</span>
          <div class="footer">
            <div class="skills">
              <img src="../Images/check.svg" />
              <div class="box">
                <span class="dark-text">NodeJs</span>
                <span class="light-text">Experienced</span>
              </div>
            </div>
            <div class="skills">
              <img src="../Images/check.svg" />
              <div class="box">
                <span class="dark-text">ExpressJs</span>
                <span class="light-text">Experienced</span>
              </div>
            </div>
            <div class="skills">
              <img src="../Images/check.svg" />
              <div class="box">
                <span class="dark-text">MongoDB</span>
                <span class="light-text">Experienced</span>
              </div>
            </div>
            <div class="skills">
              <img src="../Images/check.svg" />
              <div class="box">
                <span class="dark-text">Git/Github</span>
                <span class="light-text">Experienced</span>
              </div>
            </div>
            <div class="skills">
              <img src="../Images/check.svg" />
              <div class="box">
                <span class="dark-text">Postman</span>
                <span class="light-text">Experienced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
};
</script>

<style scoped>
.container {
  margin-top: 10vh;
  height: 90vh;
  background-color: #f6f6f6;
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

.container .bottom {
  display: flex;
  width: 100%;
  height: 80%;
}

.container .bottom .left {
  width: 50%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .bottom .left .border {
  height: 65%;
  width: 80%;
  border: 2px solid black;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
}

.container .bottom .left .border .footer {
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 20px;
  /* gap: 120px; */
  /* justify-content: space-around; */
  margin: 20px;
  /* background-color: red; */
  height: 80%;
}

.container .bottom .left .border .footer .skills {
  width: 50%;
  display: flex;
  align-items: start;
  gap: 20px;
  padding: 10px;
  /* background-color: #fff; */
}

.container .bottom .left .border .footer .skills .box {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
}

.container .bottom .left .border .footer .skills .box .dark-text {
  font-weight: 900;
}

.container .bottom .left .border .footer .skills .box .light-text {
  font-weight: 200;
  color: rgb(119, 119, 119);
}

.container .bottom .left .border .footer img {
  width: 25px;
}

.container .bottom .right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .bottom .right .border {
  height: 65%;
  width: 80%;
  border: 2px solid black;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
}

.container .bottom .right .border .heading,
.container .bottom .left .border .heading {
  font-size: 2rem;
  color: rgb(65, 64, 65);
}

.container .bottom .right .border .footer {
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 20px;
  /* gap: 120px; */
  /* justify-content: space-around; */
  margin: 20px;
  /* background-color: red; */
  height: 80%;
}

.container .bottom .right .border .footer .skills {
  width: 50%;
  display: flex;
  align-items: start;
  gap: 20px;
  padding: 10px;
  /* background-color: #fff; */
}

.container .bottom .right .border .footer .skills .box {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
}

.container .bottom .right .border .footer .skills .box .dark-text {
  font-weight: 900;
}

.container .bottom .right .border .footer .skills .box .light-text {
  font-weight: 200;
  color: rgb(119, 119, 119);
}

.container .bottom .right .border .footer img {
  width: 25px;
}
</style>

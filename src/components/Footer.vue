<template>
  <div class="container">
    <div class="top">
      <div class="text">
        <div class="light-text">Get in Touch</div>
        <div class="dark-text">Contact Me</div>
      </div>
      <div class="links">
        <span class="mail">
          <img src="../Images/mail.svg" />
          <span>amanraina9086@gmail.com</span>
        </span>
        <span class="mail">
          <img src="../Images/mail.svg" />
          <span>LinkedIn</span>
        </span>
      </div>
    </div>
    <div class="bottom">
      <div class="footer-links">
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="copyright">
        Copyright © 2024 Aman Raina • All Rights Reserved
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.container {
  height: 100vh;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top {
  /* background-color: red; */
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top .text {
  /* background-color: blue; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 120px;
}
.top .light-text {
  color: rgb(65, 64, 64);
  font-size: large;
}

.top .dark-text {
  color: black;
  font-size: 59.2px;
}
.top .links {
  /* background-color: green; */
  padding: 30px;
  border-radius: 40px;
  border: 2px solid black;
  display: flex;
  gap: 50px;
  margin-bottom: 120px;
}
.top .links .mail {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.top .links .mail img {
  width: 30px;
}
.bottom {
  /* background-color: green; */
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.bottom .copyright {
  font-size: large;
  color: #4d4d4d;
}
.bottom .footer-links ul {
  margin-bottom: 40px;
  list-style: none;
  display: flex;
  gap: 70px;
}
.bottom .footer-links ul li {
  font-size: 25px;
  font-weight: 400;
  cursor: pointer;
}
</style>

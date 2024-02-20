<template>
  <div class="container" id="footer">
    <div class="top">
      <div class="text">
        <div class="light-text">Get in Touch</div>
        <div class="dark-text">Contact Me</div>
      </div>
      <div class="links">
        <span class="mail">
          <img src="../Images/mail.svg" />
          <a href="mailto:amanraina9086@gmail.com" target="_blank"
            >amanraina9086@gmail.com</a
          >
        </span>
        <span class="mail">
          <img src="../Images/mail.svg" />
          <a href="https://www.linkedin.com/in/amanraina22/" target="_blank"
            >LinkedIn</a
          >
        </span>
      </div>
    </div>
    <div class="bottom">
      <div class="footer-links">
        <ul>
          <a href="#nav">
            <li>Info</li>
          </a>
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
  background-color: #171717;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid skyblue;
}
.top {
  /* background-color: red; */
  gap: 45px;
  box-shadow: 0rem 1rem 5rem hsla(0, 0%, 71%, 0.2);
  margin-top: 20vh;
  width: 70%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid skyblue;
}
.top .text {
  /* background-color: blue; */
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 20px; */
  margin-top: 60px;
}
.top .light-text {
  color: rgb(243, 243, 243);
  font-size: large;
}

.top .dark-text {
  color: rgb(255, 255, 255);
  font-size: 59.2px;
}
.top .links {
  /* background-color: green; */
  padding: 30px;
  border-radius: 40px;
  border: 2px solid white;
  display: flex;
  gap: 50px;
  margin-bottom: 60px;
}
.top .links .mail {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: aliceblue;
}
.top .links .mail a {
  text-decoration: none;
  color: #f6f6f6;
}
.top .links .mail a:hover {
  text-decoration: underline;
}
.top .links .mail img {
  width: 30px;
  filter: invert(1);
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
  color: aliceblue;
}
.bottom .footer-links ul {
  margin-bottom: 40px;
  list-style: none;
  display: flex;
  gap: 70px;
}
.bottom .footer-links ul a {
  color: aliceblue;
  font-size: 25px;
  font-weight: 400;
  text-decoration: none;
}
.bottom .footer-links ul li:hover {
  cursor: pointer;
  text-decoration: underline;
  transform: scale(1.1);
  transition: all 0.8s ease;
  color: #f6f6f6;
}
</style>

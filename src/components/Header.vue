<template>
  <section class="hero">
    <div class="hero-img-container">
      <div class="hero-img">
        <img src="../Images/aman.jpg" alt="Photo of Aman" />
      </div>
    </div>
    <div class="info">
      <span>Hello I'm</span>
      <span class="nav-brand">Aman Raina</span>
      <span class="occ">Frontend Developer</span>
      <span>
        <button>Download Résume</button>
        <button class="contact-button">Contact Info</button>
      </span>
      <span class="logo">
        <img title="Github" src="../Images/github.svg" alt="github_logo" />
        <img
          title="LinkedIn"
          class="link_logo"
          src="../Images/linkedin.svg"
          alt="linkedin_logo"
        />
      </span>
    </div>
  </section>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style>
.hero {
  display: flex;
  align-items: center;
  height: 600px;
  margin-top: 150px;
  background-color: #f6f6f6;
}
.hero .hero-img-container {
  display: flex;
  padding-right: 30px;
  justify-content: end;
  width: 50%;
}
.hero .hero-img-container .hero-img {
  width: 400px;
  height: 480px;
  background-color: rgb(241, 241, 241);
  border-radius: 50%;
  overflow: hidden;
  /* box-shadow: 10px 10px 15px rgb(11, 135, 212); */
}
.hero .hero-img-container .hero-img img {
  max-width: 300px;
  transform: translateY(30%);
  scale: 2.7;
}
.hero .hero-img-container .hero-img img:hover {
  cursor: pointer;
}
.info {
  /* background-color: orange; */
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-left: 50px;
  padding-top: 40px;
  padding-bottom: 40px;
}
.info .occ {
  font-size: 2rem;
}
.info .nav-brand {
  font-size: 3rem;
  color: black;
}
.info span {
  font-size: larger;
  font-weight: 700;
  color: rgb(71, 71, 71);
}
.info span .contact-button {
  border: none;
  background-color: rgb(65, 64, 64);
  color: #fff;
}
.info span .contact-button:hover {
  background-color: rgb(241, 241, 241);
  color: rgb(65, 64, 64);
  border: 2px solid black;
}
.info span button {
  border: 2px solid black;
  background-color: rgb(241, 241, 241);
  padding: 20px 25px;
  border-radius: 30px;
  margin: 10px;
  font-size: 0.9rem;
  cursor: pointer;
}
.info span button:hover {
  background-color: rgb(65, 64, 64);
  color: #fff;
}
.hero .info .logo img {
  width: 30px;
}
.info .logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.info .logo .link_logo {
  scale: 1.14;
}
</style>

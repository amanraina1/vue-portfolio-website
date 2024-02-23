<template>
  <section class="hero" id="header">
    <div class="hero-img-container">
      <img src="../Images/aman.png" alt="Photo of Aman" />
      <!-- <div class="hero-img"></div> -->
    </div>
    <div class="info">
      <div class="details">
        <p>Hello I'm</p>
        <h1>Aman Raina</h1>
        <p class="title">Frontend Developer</p>
        <!-- <span>Hello I'm</span>
        <span class="nav-brand">Aman Raina</span>
        <span class="occ">Frontend Developer</span> -->
        <span>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1bTrrqla_A6CpxDmE2ih3O4AeE6nurVLR/view?usp=sharing"
          >
            <button>Download Résume</button>
          </a>
          <a href="#footer">
            <button class="contact-button">Contact Info</button>
          </a>
        </span>
        <span class="logo">
          <a href="https://github.com/amanraina1" target="_blank">
            <img title="Github" src="../Images/github.svg" alt="github_logo" />
          </a>
          <a href="https://www.linkedin.com/in/amanraina22/" target="_blank">
            <img
              title="LinkedIn"
              class="link_logo"
              src="../Images/linkedin.svg"
              alt="linkedin_logo"
            />
          </a>
        </span>
      </div>
    </div>
  </section>
  <!-- <span class="arrow">
    <a href="#about"><img src="../Images/arrow.svg" alt="" /></a>
  </span> -->
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
@media screen and (max-width: 700px) {
  /* .arrow img {
    width: 30px;
    position: absolute;
    right: 10px;
    bottom: 20px;
  } */
  .hero {
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 100vw;
    background-color: #f6f6f6;
    /* background-color: green; */
  }

  .hero .hero-img-container {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    position: relative;
    width: 100%;
    /* background-color: red; */
    height: 50%;
  }
  .hero .hero-img-container img {
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 400px;
  }

  /* .hero .hero-img-container .hero-img {
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
    overflow: hidden;
  } */

  /* .hero .hero-img-container .hero-img img {
    transform: translateY(30%);
    scale: 2.5;
    cursor: pointer;
  } */

  .info {
    /* background-color: orange; */
    width: 100%;
    height: 50%;
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 1rem;
  }
  .info .details {
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .info .details .logo {
    display: flex;
    justify-content: center;
  }

  .info .title {
    font-size: 2rem;
  }

  .info .details h1 {
    font-size: 3rem;
    color: black;
  }

  .info .details p {
    font-size: larger;
    font-weight: 700;
    color: rgb(71, 71, 71);
  }

  .info .details span .contact-button {
    border: none;
    background-color: rgb(65, 64, 64);
    color: #fff;
  }

  .info .details span .contact-button:hover {
    background-color: rgb(241, 241, 241);
    color: rgb(65, 64, 64);
    border: 2px solid black;
  }

  .info .details span button {
    border: 2px solid black;
    background-color: rgb(241, 241, 241);
    padding: 20px 25px;
    border-radius: 30px;
    margin: 10px;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .info .details span button:hover {
    background-color: rgb(65, 64, 64);
    color: #fff;
  }

  .hero .info .logo img {
    width: 30px;
  }

  .info .details .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }

  .info .details .logo .link_logo {
    scale: 1.14;
  }
}
@media screen and (min-width: 700px) and (max-width: 1200px) {
  .hero {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    height: 83vh;
    width: 100vw;
    background-color: #f6f6f6;
    /* background-color: green; */
  }
  .hero .hero-img-container {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    position: relative;
    width: 100%;
    /* background-color: red; */
    height: 50%;
  }
  .hero .hero-img-container img {
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 400px;
  }

  /* .hero .hero-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
   background-color: red; 
    height: 50%;
  }

  .hero .hero-img-container .hero-img {
    width: 24vw;
    height: 24vw;
    border-radius: 50%;
    overflow: hidden;
  }

  .hero .hero-img-container .hero-img img {
    max-width: 300px;
    transform: translate(-10%, 15%);
    scale: 1.5;
    cursor: pointer;
  } */

  .info {
    /* background-color: orange; */
    width: 100%;
    height: 50%;
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 1rem;
  }
  .info .details {
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .info .details .logo {
    display: flex;
    justify-content: center;
  }

  .info .title {
    font-size: 2rem;
  }

  .info .details h1 {
    font-size: 3rem;
    color: black;
  }

  .info .details p {
    font-size: larger;
    font-weight: 700;
    color: rgb(71, 71, 71);
  }

  .info .details span .contact-button {
    border: none;
    background-color: rgb(65, 64, 64);
    color: #fff;
  }

  .info .details span .contact-button:hover {
    background-color: rgb(241, 241, 241);
    color: rgb(65, 64, 64);
    border: 2px solid black;
  }

  .info .details span button {
    border: 2px solid black;
    background-color: rgb(241, 241, 241);
    padding: 20px 25px;
    border-radius: 30px;
    margin: 10px;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .info .details span button:hover {
    background-color: rgb(65, 64, 64);
    color: #fff;
  }

  .hero .info .logo img {
    width: 30px;
  }

  .info .details .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }

  .info .details .logo .link_logo {
    scale: 1.14;
  }
}
@media screen and (min-width: 1200px) {
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 83vh;
    /* background-color: #f6f6f6; */
  }
  /* .hero .hero-img-container {
    position: relative;
    width: 100%;
    background-color: red;
    height: 50%;
  }
  .hero .hero-img-container img {
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 400px;
  } */

  .hero .hero-img-container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    height: 100%;
  }

  .hero .hero-img-container img {
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 800px;
  }

  .hero .hero-img-container .hero-img img {
    max-width: 300px;
    transform: translateY(25%);
    scale: 2;
    cursor: pointer;
  }

  .info {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
  }
  .info .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
  }
  .info .details .logo {
    display: flex;
    justify-content: center;
  }

  .info .title {
    font-size: 2rem;
  }

  .info .details h1 {
    font-size: 3rem;
    color: black;
  }

  .info .details p {
    font-size: larger;
    font-weight: 700;
    color: rgb(71, 71, 71);
  }

  .info .details span .contact-button {
    border: none;
    background-color: rgb(65, 64, 64);
    color: #fff;
  }

  .info .details span .contact-button:hover {
    background-color: rgb(241, 241, 241);
    color: rgb(65, 64, 64);
    border: 2px solid black;
  }

  .info .details span button {
    border: 2px solid black;
    background-color: rgb(241, 241, 241);
    padding: 20px 25px;
    border-radius: 30px;
    margin: 10px;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .info .details span button:hover {
    background-color: rgb(65, 64, 64);
    color: #fff;
  }

  .hero .info .logo img {
    width: 30px;
  }

  .info .details .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }

  .info .details .logo .link_logo {
    scale: 1.14;
  }
}
</style>

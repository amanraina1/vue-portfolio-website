<template>
  <div class="container">
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
            <span>Frontend Development</span>
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
        <span class="bottom"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
          harum quia repellat eveniet quod eius commodi! Vel aperiam perferendis
          dolorem laboriosam magni rem et qui voluptatem, fuga in, eum sint
          quaerat blanditiis iste soluta similique cum. Fuga omnis assumenda
          natus tenetur ex, expedita animi dicta, ullam, quasi totam iusto
          ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto quis hic voluptatibus veniam sapiente dolore in! Et cum
          molestiae, provident sit quos, voluptas possimus mollitia dolore
          aspernatur vitae soluta architecto, veniam doloribus porro est
          reiciendis enim explicabo in voluptates aperiam. Maiores sapiente
          doloremque odio sequi reiciendis animi, necessitatibus praesentium
          iste.</span
        >
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
.container {
  margin-top: 200px;
  height: 700px;
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
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.bottom-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.bottom-container .left-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
}
.bottom-container .left-container .img-container {
  background-color: rgb(187, 187, 187);
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
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 100px;
}

.bottom-container .right-container .top {
  display: flex;
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
</style>

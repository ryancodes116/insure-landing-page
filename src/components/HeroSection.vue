<template>
  <div class="hero-wrapper">
    <img src="../assets/images/image-intro-desktop.jpg" alt="family holding hands" />

    <div class="hero-text">
      <img src="../assets/images/bg-pattern-intro-left-desktop.svg" class="pattern-left" />
      <img src="../assets/images/bg-pattern-intro-right-desktop.svg" class="pattern-right" />
      <div class="container">
        <h1 class="title">Humanizing your insurance.</h1>
        <p
          class="text"
        >Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
        <a href="#" class="button">View Plans</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-text {
  position: relative;
  text-align: center;
  background-color: hsl(256, 26%, 20%);
  padding: 6rem 0 5rem;
  color: #fff;
}

.pattern-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
}

.pattern-right {
  position: absolute;
  bottom: -5rem;
  right: 0;
  width: 30%;
}

.title {
  font-size: 3.2rem;
  line-height: 3.5rem;
  margin-bottom: 1.5rem;
}

.text {
  line-height: 1.9;
  margin-bottom: 3rem;
}

.button {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  border: 3px solid #fff;
  padding: 0.7rem 1.8rem;
  cursor: pointer;
}

.button:hover {
  background-color: #fff;
  color: hsl(256, 26%, 20%);
}
</style>
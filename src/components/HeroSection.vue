<template>
  <div class="hero-wrapper">
    <img
      src="../assets/images/image-intro-mobile.jpg"
      alt="family holding hands"
      class="family-mobile"
    />
    <img
      src="../assets/images/image-intro-desktop.jpg"
      alt="family holding hands"
      class="family-desktop"
    />

    <div class="hero-text">
      <img src="../assets/images/bg-pattern-intro-left-mobile.svg" class="pattern-left-mobile" />
      <img src="../assets/images/bg-pattern-intro-left-desktop.svg" class="pattern-left-desktop" />
      <img src="../assets/images/bg-pattern-intro-right-mobile.svg" class="pattern-right-mobile" />
      <img src="../assets/images/bg-pattern-intro-right-desktop.svg" class="pattern-right-desktop" />
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
.hero-wrapper {
  position: relative;
}

.family-mobile {
  width: 100%;
}

.family-desktop {
  display: none;
}

.hero-text {
  position: relative;
  text-align: center;
  background-color: hsl(256, 26%, 20%);
  padding: 6rem 0 5rem;
  color: #fff;
}

.pattern-left-desktop,
.pattern-right-desktop {
  display: none;
}

.pattern-left-mobile {
  position: absolute;
  top: 0;
  left: 0;
  /* width: 25%;
  max-width: 149px; */
}

.pattern-right-mobile {
  position: absolute;
  bottom: -12rem;
  right: 0;
  /* width: 30%;
  max-width: 217px; */
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

/* Media Queries */
@media (min-width: 990px) {
  .family-mobile {
    display: none;
  }

  .family-desktop {
    display: block;
    min-width: 420px;
    width: 30%;
    position: absolute;
    top: 12%;
    right: 9%;
    z-index: 100;
  }

  .hero-text {
    text-align: left;
  }

  .title {
    width: 35%;
    font-size: 3.5rem;
  }

  .text {
    width: 45%;
  }

  .pattern-left-mobile,
  .pattern-right-mobile {
    display: none;
  }

  .pattern-left-desktop,
  .pattern-right-desktop {
    display: block;
    position: absolute;
  }

  .pattern-left-desktop {
    bottom: -25rem;
    left: 0;
  }

  .pattern-right-desktop {
    top: 0;
    right: 0;
    width: 20%;
    z-index: 101;
  }
}
</style>
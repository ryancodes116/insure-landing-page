<template>
  <div class="cta">
    <img src="../assets/images/bg-pattern-how-we-work-mobile.svg" class="pattern-mobile" />
    <img src="../assets/images/bg-pattern-how-we-work-desktop.svg" class="pattern-desktop" />
    <div class="cta-content">
      <h1 class="title">Find out more about how we work</h1>
      <a href="#" class="button">How We Work</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallToAction"
};
</script>

<style scoped>
.cta {
  position: relative;
  margin-top: 8rem;
  padding: 5rem 1rem 6rem;
  background-color: hsl(256, 26%, 20%);
  color: #fff;
}

.pattern-mobile {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  max-width: 184px;
}

.pattern-desktop {
  display: none;
}

.title {
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 3rem;
  margin-bottom: 2.5rem;
}

.button {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  border: 3px solid #fff;
  padding: 0.7rem 1.8rem;
  cursor: pointer;
  z-index: 100;
}

.button:hover {
  background-color: #fff;
  color: hsl(256, 26%, 20%);
}

/* Media Queries */
@media (min-width: 990px) {
  .cta {
    padding: 5rem 4rem;
  }

  .pattern-mobile {
    display: none;
  }

  .pattern-desktop {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 32%;
    min-width: 440px;
  }

  .cta-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 2.9rem;
    width: 45%;
    margin-bottom: 0;
  }
}
</style>
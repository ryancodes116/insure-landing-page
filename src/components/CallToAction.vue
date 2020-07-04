<template>
  <div class="cta">
    <img src="../assets/images/bg-pattern-how-we-work-mobile.svg" class="pattern" />
    <h1 class="title">Find out more about how we work</h1>
    <a href="#" class="button">How We Work</a>
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

.pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
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
}

.button:hover {
  background-color: #fff;
  color: hsl(256, 26%, 20%);
}
</style>
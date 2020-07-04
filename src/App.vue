<template>
  <div id="app">
    <Navbar />
    <HeroSection />
    <Details />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Details from "./components/Details";

export default {
  name: "App",
  components: {
    Navbar,
    HeroSection,
    Details
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1,
h2,
h3 {
  font-family: "DM Serif Display", serif;
}

img {
  max-width: 100%;
}

#app {
  font-family: "Karla", sans-serif;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}

.container {
  width: 85%;
  margin: 0 auto;
}
</style>

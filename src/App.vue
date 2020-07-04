<template>
  <div id="app">
    <Navbar />
    <HeroSection />
    <Details />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Details from "./components/Details";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    HeroSection,
    Details,
    Footer
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
  font-weight: 400;
}

img {
  max-width: 100%;
}

ul {
  list-style: none;
  margin: none;
}

ul li a {
  text-decoration: none;
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

<template>
  <div class="navbar">
    <div class="nav-content container">
      <img src="../assets/images/logo.svg" alt="Insure logo" class="logo" />
      <img src="../assets/images/icon-hamburger.svg" alt="menu" class="menu-icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  padding: 2rem 0;
}

.nav-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.logo {
  height: 70%;
  width: 35%;
  margin: auto 0;
}

.menu-icon {
  cursor: pointer;
}
</style>
<template>
  <div class="navbar">
    <div class="nav-content container">
      <img src="../assets/images/logo.svg" alt="Insure logo" class="logo" />
      <!-- Menu Icon -->
      <img src="../assets/images/icon-hamburger.svg" alt="menu" class="menu-icon" />
      <!-- Nav Links -->
      <ul class="nav-links">
        <li>
          <a href="#" class="nav-link">How We Work</a>
        </li>
        <li>
          <a href="#" class="nav-link">Blog</a>
        </li>
        <li>
          <a href="#" class="nav-link">Account</a>
        </li>
        <li>
          <a href="#" class="nav-link view-plans-link">View Plans</a>
        </li>
      </ul>
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
  max-width: 130px;
  margin: auto 0;
}

.menu-icon {
  cursor: pointer;
}

.nav-links {
  display: none;
}

/* Media Queries */
@media (min-width: 990px) {
  .menu-icon {
    display: none;
  }

  .nav-links {
    display: flex;
    text-transform: uppercase;
  }

  .nav-links li {
    margin-right: 1.5rem;
  }

  .nav-link {
    color: hsl(273, 4%, 51%);
  }

  .nav-link:hover {
    color: #000;
    font-weight: 700;
  }

  .view-plans-link {
    color: #000;
    border: 2px solid #000;
    padding: 0.5rem 1rem;
    margin-left: 0.3rem;
  }

  .view-plans-link:hover {
    color: #fff;
    background-color: #000;
    font-weight: 400;
  }
}
</style>
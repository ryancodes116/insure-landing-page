<template>
  <footer class="footer">
    <img src="../assets/images/bg-pattern-footer-mobile.svg" class="pattern" />
    <div class="footer-content container">
      <div class="footer-top">
        <img src="../assets/images/logo.svg" alt="Insure logo" class="logo" />
        <div class="social-links">
          <a href="#" class="social-link">
            <img src="../assets/images/icon-facebook.svg" alt="facebook logo" />
          </a>
          <a href="#" class="social-link">
            <img src="../assets/images/icon-twitter.svg" alt="twitter logo" />
          </a>
          <a href="#" class="social-link">
            <img src="../assets/images/icon-pinterest.svg" alt="pinterest logo" />
          </a>
          <a href="#" class="social-link">
            <img src="../assets/images/icon-instagram.svg" alt="instagram logo" />
          </a>
        </div>
      </div>
      <hr class="line" />
      <div class="footer-links">
        <div class="links">
          <p class="group-title">Our Company</p>
          <ul class="list">
            <li class="list-item">
              <a href="#" class="link">How We Work</a>
            </li>
            <li class="list-item">
              <a href="#" class="link">Why Insure?</a>
            </li>
            <li class="list-item">
              <a href="#" class="link">Check Price</a>
            </li>
            <li class="list-item">
              <a href="#" class="link">Reviews</a>
            </li>
          </ul>
        </div>
        <div class="links">
          <p class="group-title">Help Me</p>
          <ul class="list">
            <li class="list-item">
              <a href="#" class="link">FAQ</a>
            </li>
            <li class="list-item">
              <a href="#" class="link">Terms of Use</a>
            </li>
            <li class="list-item">
              <a href="#" class="link">Privacy Policy</a>
            </li>
            <li class="list-item">
              <a href="#" class="link">Cookies</a>
            </li>
          </ul>
        </div>
        <div class="links">
          <p class="group-title">Contact</p>
          <ul class="list">
            <li class="list-item">
              <a href="#" class="link">Sales</a>
            </li>
            <li class="list-item">
              <a href="#" class="link">Support</a>
            </li>
            <li class="list-item">
              <a href="#" class="link">Live Chat</a>
            </li>
          </ul>
        </div>
        <div class="links">
          <p class="group-title">Others</p>
          <ul class="list">
            <li class="list-item">
              <a href="#" class="link">Careers</a>
            </li>
            <li class="list-item">
              <a href="#" class="link">Press</a>
            </li>
            <li class="list-item">
              <a href="#" class="link">License</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  position: relative;
  background-color: hsl(0, 0%, 98%);
  padding: 5rem 0;
  text-align: center;
}

.pattern {
  position: absolute;
  top: 0;
  left: 0;
}

.footer-top {
  margin-bottom: 2.5rem;
}

.logo {
  margin-bottom: 2rem;
}

.social-link {
  margin-right: 1rem;
  cursor: pointer;
}

.social-link:last-of-type {
  margin-right: 0;
}

.links {
  margin-bottom: 4rem;
}

.links:last-of-type {
  margin-bottom: 0;
}

.line {
  border: 0.2px solid hsl(273, 4%, 51%);
}

.footer-links {
  margin-top: 4rem;
}

.group-title {
  color: hsl(273, 4%, 51%);
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
}

.list-item {
  margin-bottom: 1rem;
}

.link {
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
}
</style>
<template>
  <div class="card">
    <!-- <img :src="require(detail.imageUrl)" alt="detail icon" class="card-image" /> -->
    <img v-if="detail.id === 1" src="../assets/images/icon-snappy-process.svg" class="card-image" />
    <img
      v-else-if="detail.id === 2"
      src="../assets/images/icon-affordable-prices.svg"
      class="card-image"
    />
    <img
      v-else-if="detail.id === 3"
      src="../assets/images/icon-people-first.svg"
      class="card-image"
    />
    <h2 class="card-title">{{ detail.title }}</h2>
    <p class="card-text">{{ detail.text }}</p>
  </div>
</template>

<script>
export default {
  name: "DetailCard",
  props: {
    detail: Object
  }
};
</script>

<style>
.card {
  margin-bottom: 4rem;
}

.card:last-of-type {
  margin-bottom: 0;
}

.card-image {
  margin-bottom: 1.5rem;
}

.card-title {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1.3rem;
}

.card-text {
  color: hsl(273, 4%, 51%);
  line-height: 1.8;
}

/* Media Queries */
@media (min-width: 990px) {
  .card {
    text-align: left;
    margin-bottom: 0;
    margin-right: 1.5rem;
  }

  .card:last-of-type {
    margin-right: 0;
  }
}
</style>
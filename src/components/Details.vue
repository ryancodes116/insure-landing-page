<template>
  <div class="details">
    <div class="details-content container">
      <hr class="line" />
      <h1 class="title">We're different</h1>
      <div class="cards">
        <DetailCard v-for="detail in allDetails" :key="detail.id" :detail="detail" />
      </div>

      <CallToAction />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DetailCard from "./DetailCard";
import CallToAction from "./CallToAction";

export default {
  name: "Details",
  components: {
    DetailCard,
    CallToAction
  },
  computed: mapGetters(["allDetails"])
};
</script>

<style scoped>
.details {
  padding: 9rem 0 10rem;
  text-align: center;
}

.line {
  width: 40%;
  margin: 0 auto 2.5rem;
  border: 1px solid hsl(273, 4%, 51%);
}

.title {
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 5rem;
}

/* Media Queries */
@media (min-width: 990px) {
  .details {
    text-align: left;
  }

  .line {
    margin: 0 0 2.5rem;
    width: 10%;
  }

  .title {
    font-size: 3.5rem;
  }

  .cards {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
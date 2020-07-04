import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    details: [
      {
        id: 1,
        imageUrl: '../assets/images/icon-snappy-process.svg',
        title: 'Snappy Process',
        text: `Our application process can be completed in minutes, not hours. Don't get stuck filing in tedious forms`,
      },
      {
        id: 2,
        imageUrl: '../assets/images/icon-affordable-prices.svg',
        title: 'Affordable Prices',
        text: `We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.`,
      },
      {
        id: 3,
        imageUrl: '../assets/images/icon-people-first.svg',
        title: 'People First',
        text: `Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.`,
      },
    ],
  },
  getters: {
    allDetails: (state) => state.details,
  },
  mutations: {},
  actions: {},
  modules: {},
});

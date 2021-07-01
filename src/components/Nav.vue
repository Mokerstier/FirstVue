<template>
  <div>
    <nav id="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/work">Work</router-link>
      <router-link to="/dashboard" v-if="userProfile.name"
        >Dashboard</router-link
      >
      <a href="#" v-if="userProfile.name" @click="logout()">Logout</a>
      <router-link v-else to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Nav",
  computed: {
    ...mapState(["userProfile"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
});
</script>

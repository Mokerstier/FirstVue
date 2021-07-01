<template>
  <div id="app">
    <Nav />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav,
  },
  computed: {
    ...mapState(["userProfile"]),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    },
  },
};
</script>

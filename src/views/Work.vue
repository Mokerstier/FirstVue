<template>
  <div class="root">
    <section class="basic-grid" v-if="posts.length">
      <h2>Showcase</h2>
      <div v-for="post in posts" :key="post.id">
        <Article v-bind:post="post" />
      </div>
    </section>
    <div v-else>
      <p class="no-results">There are currently no posts</p>
    </div>
  </div>
</template>

<script lang="ts">
import Article from "@/components/Article.vue";
import { mapState } from "vuex";

export default {
  name: "Work",
  data() {
    return {
      selectedPost: {},
      showPostModal: false,
      fullPost: {},
    };
  },
  components: {
    Article,
  },
  computed: {
    ...mapState(["posts"]),
  },
  methods: {},
};
</script>

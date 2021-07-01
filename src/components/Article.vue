<template>
  <article class="post" v-if="post">
    <img
      class="header-img"
      :class="{
        hero: showPostModal,
        small: !showPostModal,
      }"
      v-if="post.img"
      :src="post.img"
      alt=""
    />
    <header>
      <h5>{{ post.title }}</h5>
      <span>{{ post.createdOn | formatDate }}</span>
      <p>{{ post.short | trimLength }}</p>
      <ul v-if="!showPostModal">
        <li><a @click="viewPost(post)">view full post</a></li>
      </ul>
      <transition name="fade">
        <div v-if="showPostModal" class="p-modal">
          <div class="p-container">
            <a @click="closePostModal()" class="close">close</a>
            <div class="full-post">
              <h5>{{ fullPost.userName }}</h5>
              <span>{{ fullPost.createdOn | formatDate }}</span>
              <div class="body">
                <p>{{ fullPost.short }}</p>
                <p>{{ fullPost.content }}</p>
              </div>

              <a :href="post.gitLink" target="_blank" rel="noopener noreferrer"
                >Github</a
              >
            </div>
          </div>
        </div>
      </transition>
    </header>
  </article>
</template>

<script>
import Vue from "vue";
import moment from "moment";

export default Vue.extend({
  name: "Article",
  props: ["post", "show"],

  data() {
    return {
      fullpost: {},
      showPostModal: false,
    };
  },
  methods: {
    async viewPost(post) {
      this.fullPost = post;
      this.showPostModal = true;
    },
    closePostModal() {
      this.showPostModal = false;
    },
  },
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }
      let date = val.toDate();
      return moment(date).fromNow();
    },
    trimLength(val) {
      if (val.length < 200) {
        return val;
      }
      return `${val.substring(0, 200)}...`;
    },
  },
});
</script>

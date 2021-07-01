<template>
  <div id="dashboard">
    <transition name="fade"> </transition>
    <section>
      <div class="col1">
        <div class="profile">
          <h5>{{ userProfile.name }}</h5>
          <p>{{ userProfile.title }}</p>
          <div class="createPost">
            <p>Create a post</p>
            <form @submit.prevent>
              <div>
                <h3>Meta</h3>
                <label :class="post.title !== ''" for="">Title:</label>
                <input type="text" v-model="post.title" />
              </div>
              <div>
                <label for="">Description long:</label>
                <textarea v-model="post.content"></textarea>
              </div>
              <div>
                <label for="">Description short:</label>
                <textarea v-model="post.short"></textarea>
              </div>
              <div>
                <label for="">Gitlink:</label>
                <input v-model="post.gitLink" type="text" />
              </div>
              <div>
                <label for="">Live link:</label>
                <input v-model="post.liveLink" type="text" />
              </div>
              <h3>Image source</h3>
              <div>
                <label for="">Image:</label>
                <input v-model="post.img" type="text" />
              </div>
              <div v-if="programmingLanguages">
                <h3>Languages / Frameworks:</h3>
                <div v-for="lang in programmingLanguages" :key="lang.title">
                  <CheckBox v-model="" v-bind="lang" />
                </div>
              </div>

              <button
                @click="createPost()"
                :disabled="post.content === ''"
                class="button"
              >
                post
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CheckBox from "@/components/CheckBox.vue";
import { mapState } from "vuex";
import { programmingLanguages } from "@/constants/index.ts";

export default {
  data() {
    return {
      post: {},
      programmingLanguages,
    };
  },
  components: {
    CheckBox,
  },
  computed: {
    ...mapState(["userProfile", "posts"]),
  },
  methods: {
    createPost() {
      const { title, content, gitLink, short, img, liveLink } = this.post;
      const lang = this.lang;
      this.$store.dispatch("createPost", {
        title,
        content,
        gitLink,
        short,
        img,
        lang,
        liveLink,
      });
    },
  },
};
</script>

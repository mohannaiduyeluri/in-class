<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { usePosts } from "../models/posts";
import PostView from "../components/PostView.vue";

const posts = usePosts()
posts.fetchPosts();
import { api } from "../models/myFetch";
api("users/handle/vp").then((res) => {
  console.log(res);
});

</script>

<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-quarter">
        <aside class="menu">
         
        </aside>
      </div>

      <div class="column is-half">
        <post-view v-for="post in posts.list" :key="post._id"></post-view>
      </div>

      <div class="column is-one-quarter">
        <article class="panel is-primary">
          <p class="panel-heading">Primary</p>
          <p class="panel-tabs">
            <a
              :class="{ 'is-active': currentTab == 'All' }"
              @click="currentTab = 'All'"
              >All</a
            >
            <a
              :class="{ 'is-active': currentTab == 'Public' }"
              @click="currentTab = 'Public'"
              >Public</a
            >
            <a
              :class="{ 'is-active': currentTab == 'Private' }"
              @click="currentTab = 'Private'"
              >Private</a
            >
            <a
              :class="{ 'is-active': currentTab == 'Sources' }"
              @click="currentTab = 'Sources'"
              >Sources</a
            >
            <a
              :class="{ 'is-active': currentTab == 'Forks' }"
              @click="currentTab = 'Forks'"
              >Forks</a
            >
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input
                class="input is-primary"
                type="text"
                :placeholder="prompt"
              />
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <a class="panel-block is-active">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            bulma
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            marksheet
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            minireset.css
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            jgthms.github.io
          </a>
        </article>
      </div>
    </div>
  </div>
</template>

<style>
.card .delete {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}
</style>
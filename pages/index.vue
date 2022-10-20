<template>
  <div>
    <h1 class="center">News</h1>
 


      
      <div class="row">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>

  </div>
</template>

<script>
import PostCard from "~/components/PostCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  components: { PostCard },
  computed: {
    ...mapGetters({ posts: "posts/GET_POSTS" }),
  },
};
</script>
<style>
.center {
  text-align: center;
}
.black {
  background-color: aqua;
}
</style>

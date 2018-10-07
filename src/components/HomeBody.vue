<template>
    <PostList :request-base-url="requestPage"></PostList>
</template>

<script>
import PostList from "./PostList";
import { server_main_page } from "../constexpr";

console.log(server_main_page);

export default {
  name: "HomeBody",
  components: { PostList },
  data: function() {
    return {
      requestPage: server_main_page
    };
  }
};
</script>

<style scoped>
</style>

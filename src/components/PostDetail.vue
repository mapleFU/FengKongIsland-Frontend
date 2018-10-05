<template>
    <div class="post-detail">
        <span v-html="html_content"> </span>
    </div>
</template>

<script>
// testing
import typo from "typo.css";
import post from "../assets/css/post.css";

import test_post from "../test-assets/test-article.md";

var MarkdownIt = require("markdown-it"),
  md = new MarkdownIt();

export default {
  name: "PostDetail",
  props: ["post_url"],
  data: function() {
    return {
      //  markdown content
      content: test_post,
      title: "nmsl",
      html_content: test_post
    };
  },
  created: function() {
    this.html_content = md.render(this.content);
  }
};
</script>

<style scoped>
.post-detail {
  width: 100%;
}
img {
  margin: 0 auto;
}

h1,
h2 {
  margin: 0 auto;
  text-align: center;
}
</style>

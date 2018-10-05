<template>
    <div class="post-detail">
        <v-container >
            <v-layout
                    align-center
            >
                <v-flex xs8 offset-xs2 class="post-container">
                    <h1 text--darken-2 style="margin: 0 auto">{{ title }}</h1>
                    <span class="content-html" v-html="html_content"> </span>
                </v-flex>
            </v-layout>

        </v-container>

    </div>
</template>

<script>
// http://localhost:8081/detailArticle
import test_post from "../test-assets/test-article.md";

var MarkdownIt = require("markdown-it"),
  md = new MarkdownIt();
// TODO: 添加目录、时间等
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
  // computed: {
  //   html_content: md.render(this.content)
  // }
};
</script>

<style src="~typo.css" scoped>
<style scoped>
/*.content-html >>> * {*/
  /*@import "~typo.css";*/
/*}*/

/*@import "~han-css";*/
.post-detail {
  width: 100%;
  /*display: table-cell;*/
  vertical-align: middle;
  background-color: white;
}

.post-container {
  /*background-color: #9e9e9e;*/
}

.content-html >>> img {
  text-align: center;
  /*display: table-cell;*/
  /*vertical-align: middle;*/
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.content-html >>> h1,
.content-html >>> h2 {
  margin: 0 auto;
  text-align: center;
}

h1 {
  margin: 0 auto;
  font-size: 3em;
  text-align: center;
  font-weight: bold;
}
</style>

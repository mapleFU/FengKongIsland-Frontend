<template>
    <div class="post-detail">
        <v-container >
            <v-layout
                    align-center
            >
                <v-flex xs8 offset-xs2 class="post-container" elevation-5>
                    <!--TODO: 添加 TAGS -->
                    <h1 text--darken-2 style="margin: 0 auto">{{ title }}</h1>
                    <p>文章写于 {{ shown_created }}</p>
                    <p>最后编辑于 {{ shown_last }}</p>

                    <v-divider></v-divider>

                    <span class="content-html" v-html="html_content"> </span>

                    <v-divider></v-divider>
                    <!--TODO: 添加 阅读量-->

                </v-flex>
            </v-layout>

        </v-container>
    </div>
</template>

<script>
// http://localhost:8081/detailArticle
import test_post from "../test-assets/test-article.md";
import BlogFooter from "./BlogFooter";

var MarkdownIt = require("markdown-it"),
  md = new MarkdownIt();

// TODO: 添加目录、时间等
export default {
  name: "PostDetail",
  components: { BlogFooter },
  props: ["post_url"],
  data: function() {
    return {
      //  markdown content
      content: test_post,
      title: "nmsl",
      html_content: test_post,
      created_time: Date.now(),
      last_edit_time: Date.now()
    };
  },
  computed: {
    shown_created: function() {
      return new Date(this.created_time).toDateString();
      // return this.created_time.toDateString();
    },
    shown_last: function() {
      return new Date(this.last_edit_time).toDateString();
    }
  },
  created: function() {
    this.html_content = md.render(this.content);
  }
};
</script>

<style src="typo.css" scoped>
</style>
<style scoped >
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

.content-html >>> h1 {
  color: blue;
}

.content-html >>> h2 {
  color: darkblue;
}

.content-html >>> p,
.content-html >>> li {
  text-indent: 1.2em;
  font-size: 1.2em;
}

.content-html >>> img {
  max-width: 80%;
}

h1 {
  margin: 0 auto;
  font-size: 3em;
  text-align: center;
  font-weight: bold;
}
</style>

<template>
    <div class="post-detail" elevation-1>
        <v-container >
            <v-layout
                    align-center
            >
                <v-flex  class="post-container" elevation-5>
                    <!--TODO: 添加 TAGS -->
                    <h1 text--lighten-2 style="margin: 0 auto">{{ title }}</h1>
                    <p>文章写于 {{ created_time }}</p>
                    <p>最后编辑于 {{ last_edit_time }}</p>
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
import axios from "axios";
// http://localhost:8081/detailArticle
import BlogFooter from "./BlogFooter";
import { protocol, server_detailpost_address } from "../constexpr";

const MarkdownIt = require("markdown-it"),
  md = new MarkdownIt();
const meta = require("markdown-it-meta");
md.use(meta);

// TODO: 添加目录、时间等
export default {
  name: "PostDetail",
  components: { BlogFooter },
  props: ["post_url"],
  data: function() {
    return {
      //  markdown content
      post_uid: null,
      content: "",
      title: "",
      html_content: "",
      created_time: null,
      last_edit_time: null,
      tags: []
    };
  },
  computed: {
    // shown_created: function() {
    //   return new Date(this.created_time).toDateString();
    //   // return this.created_time.toDateString();
    // },
    // shown_last: function() {
    //   return new Date(this.last_edit_time).toDateString();
    // }
  },
  created: function() {
    this.post_uid = this.$route.params.uuid;
    this.getPost(this.post_uid);
  },
  methods: {
    getPost: function(post_uuid) {
      let req_url = protocol + server_detailpost_address + post_uuid + "/";
      axios.get(req_url).then(resp => {
        let data = resp.data;
        this.content = data.content;
        this.title = data.title;
        this.created_time = data.created_time;
        this.last_edit_time = data.saved_time;
        this.tags = data.tags;

        this.html_content = md.render(this.content);
      });
    }
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
  background-color: #424242;
}

.post-container {
  background-color: #626262;
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
.content-html >>> h2,
.content-html >>> h3,
.content-html >>> h4,
.content-html >>> h5,
.content-html >>> h6 {
  margin: 0 auto;
  text-align: center;
}

.content-html >>> h1 {
  /*color: blue;*/
}

.content-html >>> h2 {
  /*color: darkblue;*/
}

.content-html >>> p,
.content-html >>> li {
  text-indent: 1.1em;
  font-size: 1.1em;
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

.post-container >>> p {
  /*text-align: center;*/
  line-height: 1.2em;
  text-indent: 1.2em;
}
.post-container >>> pre > code {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
}

.post-container >>> code {
  background-color: beige;
}
</style>

<template>
    <!--<HomeHeader></HomeHeader>-->

    <v-container
            elevation-5
    >
        <v-layout

        >
            <v-flex  xs10 offset-xs1 class="post-container" >
                <!--TODO: 添加 TAGS -->
                <h1 text--lighten-2 style="margin: 0 auto">{{ title }}</h1>
                <p>文章写于 {{ created_time }}</p>
                <!--<p>最后编辑于 {{ last_edit_time }}</p>-->
                <v-divider></v-divider>

                <!--<vue-markdown>i am a ~~tast~~ **test**.</vue-markdown>-->
                <!--<vue-markdown>{{content}}</vue-markdown>-->
                <article class="content-html" v-html="html_content">

                </article>
                <!--<vue-markdown> {{content}}</vue-markdown>-->

                <v-divider></v-divider>
                <!--TODO: 添加 阅读量-->

            </v-flex>
        </v-layout>

    </v-container>

</template>

<script>
import axios from "axios";
// http://localhost:8081/detailArticle
import BlogFooter from "./BlogFooter";
import VueMarkdown from "vue-markdown";
import { protocol, server_detailpost_address } from "../constexpr";
import HomeHeader from "./BlogHeader";

// import typo from "typo.css";

const MarkdownIt = require("markdown-it"),
  md = new MarkdownIt();
const meta = require("markdown-it-meta");
md.use(meta);

// TODO: 添加目录、时间等
export default {
  name: "PostDetail",
  components: { HomeHeader, BlogFooter, "vue-markdown": VueMarkdown },
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
      tags: [],
      mkd: ""
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


<style lang="scss">
.content-html {
  @import "~typo.css";
}

.content-html >>> img {
  max-width: 80%;
  margin: 0 auto;
}

.content-html {
  html {
    font-size: 100%;
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  img {
    max-width: 80%;
    margin: 0 auto;
    align-self: center;
    width: -moz-fit-content;
    width: fit-content;
    margin: 0 auto;
  }

  code {
    border: 0;
    /*background-color: transparent;*/
    /*width: 100%;*/
    padding: 0 auto;

    height: 100%;

    /*display: flex;*/
    /*align-items: center;*/
    /*display: inline-table;*/
  }

  pre {
    width: -moz-fit-content;
    /*width: -webkit-fit-content;*/
    width: fit-content;
    margin: 0 auto;
  }
}
</style>

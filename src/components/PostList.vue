<!--PostList 包含多篇文章-->
<template>
    <div class="post-list">
        <!--pages-->
        <!--<v-layout-->
                <!--align-center-->
                <!--column-->
                <!--justify-center-->
        <!--&gt;-->
            <!--<h1 class="display-2 font-weight-thin mb-3 text&#45;&#45;white"> {{ post_list_title }} </h1>-->
            <!--&lt;!&ndash;<h4 class="subheading">冒险者的遥远故乡</h4>&ndash;&gt;-->
        <!--</v-layout>-->
        <!--<h1> {{ post_list_title }} </h1>-->
        <div class="thumbnails" v-for="post in currentPagePosts" :key="post.uuid">
            <PostThumbnail
                    :abstract="post.abstract"
                    :title="post.title"
                    :tags="post.tags"
                    :published_time="post.created_time"
                    :blog_id="post.uuid"
            > </PostThumbnail>
            <v-divider></v-divider>
        </div>

        <div class="text-xs-center">
            <v-pagination
                    v-model="currentPage"
                    :length="allPages"
                    :total-visible="6"
                    circle
            ></v-pagination>
        </div>
    </div>
</template>

<script>
import axios from "axios";

import PostThumbnail from "./PostThumbnail";
export default {
  name: "PostList",
  components: { PostThumbnail },
  props: {
    //  请求的基本的url
    //  为文章提供请求内容
    requestBaseUrl: {
      required: true,
      type: String
    }
    // post_list_title: {
    //   required: false,
    //   default: "近期博客",
    //   type: String
    // }
  },
  data: function() {
    return {
      // 所在页面的数目
      currentPagePosts: [],
      allPages: 0,
      allDataCount: 0,
      currentPage: 1
    };
  },
  created: function() {
    this.requestPages(this.currentPage);
  },
  methods: {
    requestPages: function(page_number) {
      let req_url = "http://" + this.requestBaseUrl + "?page=" + page_number;
      axios.get(req_url).then(resp => {
        let data = resp.data;
        this.allDataCount = data["count"];
        this.allPages = Math.ceil(this.allDataCount / 4);
        this.currentPagePosts = data["results"];
        // console.log(this.allPages);
        // console.log(this.allDataCount);
      });
    }
  },
  watch: {
    currentPage: function(new_val) {
      this.requestPages(new_val);
    }
  }
};
</script>

<style scoped>
.thumbnails {
  margin-bottom: 15px;
}
</style>

<!--PostList 包含多篇文章-->
<template>
    <div class="post-list">
        <!--pages-->
        <v-layout
                align-center
                column
                justify-center
        >
            <h1 class="display-2 font-weight-thin mb-3 text--white"> {{ post_list_title }} </h1>
            <!--<h4 class="subheading">冒险者的遥远故乡</h4>-->
        </v-layout>
        <!--<h1> {{ post_list_title }} </h1>-->
        <div class="thumbnails" v-for="url in requestUrls" :key="url">
            <PostThumbnail > </PostThumbnail>
            <v-divider></v-divider>
        </div>

        <div class="text-xs-center">
            <v-pagination
                    v-model="pageNumber"
                    :length="5"
                    circle
            ></v-pagination>
        </div>
    </div>
</template>

<script>
import PostThumbnail from "./PostThumbnail";
export default {
  name: "PostList",
  components: { PostThumbnail },
  data: function() {
    return {
      // 所在页面的数目
      pageNumber: 7,
      requestUrls: [1, 2, 3, 4, 5, 6],
      allPages: 25,
      requestBaseUrl: null,
      post_list_title: "近期博客"
    };
  }
};
</script>

<style scoped>
.thumbnails {
  margin-bottom: 15px;
}
</style>

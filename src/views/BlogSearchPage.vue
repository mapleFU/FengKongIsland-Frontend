<!--博客搜索页面-->
<template>
    <div id="blog-search-page">
        <header>
            <BlogHeader></BlogHeader>
        </header>

        <div id="body-container">
            <v-layout style="background-color: #424242;">
                <v-flex xs12 offset-xs2 style="background-color: #424242;">
                    <main>
                        <PostList title="标签文章" :request-base-url="post_list_url"></PostList>
                    </main>
                </v-flex>
            </v-layout>


            <aside>
                <DirectoryBar></DirectoryBar>
            </aside>
        </div>

        <footer>
            <BlogFooter></BlogFooter>
        </footer>
    </div>


</template>

<script>
// import axios from "axios";
import { search_tag_url } from "../constexpr";
import PostList from "../components/PostList";
import BlogHeader from "../components/BlogHeader";
import DirectoryBar from "../components/DirectoryBar";
import BlogFooter from "../components/BlogFooter";

// let reqUrl = protocol + search_tag_url;
// only support tag now
export default {
  name: "BlogSearchPage",
  components: { BlogFooter, DirectoryBar, PostList, BlogHeader },
  created: function() {
    // let req_url = reqUrl + this.$route.query.tag + "/posts/?page=1";
    // console.log("req_url:" + req_url);
    // axios.get(req_url).then(resp => {
    //   console.log(resp.data);
    // });
  },
  props: {
    tag_uid: {
      required: false,
      default: null,
      type: [String, null]
    }
  },
  computed: {
    post_list_url: function() {
      return search_tag_url + this.$route.query.tag + "/posts/";
    }
  }
};
</script>

<style scoped>
#blog-search-page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#body-container {
  background-color: #424242;
}

/*header,*/
/*footer {*/
/*flex: 1;*/
/*}*/

#body-container {
  display: flex;
  flex: 1;
}

main {
  flex: 1;
  margin-top: 20px;
}

nav,
aside {
  flex: 0 0 12em;
}

nav {
  order: -1;
}
</style>

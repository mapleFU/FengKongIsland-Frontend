
<template>
    <!-- 文章详情页面 -->
    <div id="detail-article">

        <div id="body-container">

            <v-container fluid>
                <v-layout style="background-color: #E0E0E0;" fluid>
                    <v-flex xs10 offset-xs1 style="background-color: #E0E0E0;">
                        <main style="background-color: #E0E0E0;">
                            <PostDetail></PostDetail>
                        </main>
                    </v-flex>

                    <v-flex>
                        <aside >
                            <DirectoryBar></DirectoryBar>
                        </aside>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <footer>
            <BlogFooter></BlogFooter>
        </footer>
    </div>
</template>

<script>
import PostDetail from "../components/PostDetail";
import BlogHeader from "../components/BlogHeader";
import BlogFooter from "../components/BlogFooter";
import DirectoryBar from "../components/DirectoryBar";
import SideBar from "../components/SideBar";

export default {
  name: "DetailArticle",
  components: { SideBar, DirectoryBar, BlogFooter, PostDetail, BlogHeader }
};
</script>

<style scoped>
#detail-article {
  background: #E0E0E0;
}
</style>

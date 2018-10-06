<!-- 文章详情页面 -->
<template>
    <div id="detail-article">
        <!--<p> 文章详情页面 </p>-->
        <header>
            <BlogHeader></BlogHeader>
        </header>
        <div id="body-container">
            <!--<nav >-->
                <!--<SideBar></SideBar>-->
            <!--</nav>-->
            <v-layout>
                <v-flex xs12 offset-xs2>
                    <main >
                        <PostDetail></PostDetail>
                    </main>
                </v-flex>
            </v-layout>

            <aside >
                <DirectoryBar></DirectoryBar>
            </aside>
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
  display: flex;
  min-height: 100vh;
  flex-direction: column;
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
}

aside {
  flex: 0 0 12em;
}

nav {
  order: -1;
}
</style>

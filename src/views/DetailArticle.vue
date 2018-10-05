<!-- 文章详情页面 -->
<template>
    <div id="detail-article">
        <!--<p> 文章详情页面 </p>-->
        <BlogHeader></BlogHeader>
        <PostDetail></PostDetail>
    </div>
</template>

<script>
import PostDetail from "../components/PostDetail";
import BlogHeader from "../components/BlogHeader";

export default {
  name: "DetailArticle",
  components: { PostDetail, BlogHeader }
};
</script>

<style scoped>
</style>

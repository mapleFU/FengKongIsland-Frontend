<!-- 文章详情页面 -->
<template>
    <div id="detail-article">
        <p> 文章详情页面 </p>
        <PostDetail></PostDetail>
    </div>
</template>

<script>
import PostDetail from "../components/PostDetail";

export default {
  name: "DetailArticle",
  components: { PostDetail }
};
</script>

<style scoped>
</style>

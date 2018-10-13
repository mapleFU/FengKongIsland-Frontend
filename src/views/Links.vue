<!--表示友情链接的页面-->
<template>
    <div id="links">
        <!--<PostDetail></PostDetail>-->
        <p>links</p>
    </div>
</template>

<script>
import ToolBar from "../components/ToolBar";
import Parallax from "../components/Parallax";
import PostDetail from "../components/PostDetail";
export default {
  name: "Links",
  components: {PostDetail, Parallax, ToolBar },
  data: function() {
    return {
      drawer: true
    };
  }
};
</script>

<style scoped>
</style>

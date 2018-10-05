<!--表示友情链接的页面-->
<template>
    <div id="links">
        <p>Links</p>
        <tool-bar :drawer="drawer"/>
        <Parallax/>

        <p>Links</p>
        <p>Links</p>
        <p>Links</p><p>Links</p>
        <p>Links</p><p>Links</p><p>Links</p><p>Links</p><p>Links</p><p>Links</p><p>Links</p><p>Links</p><p>Links</p>


    </div>
</template>

<script>
import ToolBar from "../components/ToolBar";
import Parallax from "../components/Parallax";
export default {
  name: "Links",
  components: { Parallax, ToolBar },
  data: function() {
    return {
      drawer: true
    };
  }
};
</script>

<style scoped>
</style>

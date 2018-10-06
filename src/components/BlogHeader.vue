<template>
    <div class="blog-header">
        <tool-bar :drawer="drawer"/>
        <Parallax/>
    </div>
</template>

<script>
import ToolBar from "./ToolBar";
import Parallax from "./Parallax";
export default {
  name: "HomeHeader",
  components: { Parallax, ToolBar },
  drawer: true
};
</script>

<style scoped>
</style>

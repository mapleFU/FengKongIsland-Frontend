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
  props: {
    drawer: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
</style>

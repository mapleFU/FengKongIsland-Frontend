<template>
  <div class="home">
    <Parallax></Parallax>
    <SideBar></SideBar>
    <tool-bar :drawer="drawer"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToolBar from "../components/ToolBar.vue";
import SideBar from "../components/SideBar.vue";
import Parallax from "../components/Parallax";
export default {
  name: "home",
  components: {
    Parallax,
    SideBar,
    ToolBar
  },
  //  data drawer in two props
  data: function() {
    return {
      drawer: true
    };
  }
};
</script>

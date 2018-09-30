<template>
  <div class="home">
    <SideBar></SideBar>
    <tool-bar :drawer="drawer"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToolBar from "../components/ToolBar.vue";
import SideBar from "../components/SideBar.vue";
export default {
  name: "home",
  components: {
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

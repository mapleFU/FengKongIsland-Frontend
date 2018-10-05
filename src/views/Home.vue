<!--首页-->
<template>
  <div id="home">

    <!-- html5 header -->
    <header>
      <tool-bar :drawer="drawer"/>
      <Parallax/>
    </header>

    <div id="body-container" style="top: 0;">
    <!-- left sidebar -->
      <main class="column">
        <HomeBody></HomeBody>
      </main>

      <nav id="left-sidebar" class="column">

        <SideBar></SideBar>
      </nav>



      <aside id="right-sidebar" class="column">
        <DirectoryBar></DirectoryBar>
      </aside>
    </div>
    <!-- html5 footer -->

    <footer>
      <BlogFooter></BlogFooter>
    </footer>
  </div>
</template>

<script>
// https://alistapart.com/d/holygrail/example_1.html
// https://segmentfault.com/a/1190000004524159

// @ is an alias to /src
import ToolBar from "../components/ToolBar.vue";
import SideBar from "../components/SideBar.vue";
import Parallax from "../components/Parallax";
import HomeBody from "../components/HomeBody";
import DirectoryBar from "../components/DirectoryBar";
import BlogFooter from "../components/BlogFooter";
export default {
  name: "home",
  components: {
    BlogFooter,
    DirectoryBar,
    HomeBody,
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

<style scoped>
#home {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: url("../assets/47639788_p0.jpg");
}

header,
footer {
  flex: 1;
}

#body-container {
  display: flex;
  flex: 1;
}

main {
  flex: 1;
}

nav,
aside {
  flex: 0 0 12em;
}

nav {
  order: -1;
}
</style>

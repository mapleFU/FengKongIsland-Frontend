<template>
  <div id="home">

    <!-- html5 header -->
    <header>
      <tool-bar :drawer="drawer"/>
      <Parallax/>
    </header>

    <div id="body-container">
    <!-- left sidebar -->
      <main class="column">
        <p>nmsl, wsngg</p>
      </main>

      <nav id="left-sidebar" class="column">

        <SideBar></SideBar>
      </nav>



      <aside id="right-sidebar" class="column">
        <p>right-sidebar</p>
      </aside>
    </div>
    <!-- html5 footer -->
    <footer>
      <p>footer</p>
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

<style scoped>
#home {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
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

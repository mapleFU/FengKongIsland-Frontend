<!--首页-->
<template>
  <div id="home">


    <!-- html5 header -->
    <header>
      <BlogHeader></BlogHeader>
    </header>

    <v-container id="body-container" justify-space-around fluid>
      <v-layout row
      >
        <v-flex xs3>
          <SideBar id="left-sidebar"></SideBar>
        </v-flex>

        <v-flex xs6>
          <HomeBody></HomeBody>
        </v-flex>

        <v-flex xs3>
          <DirectoryBar></DirectoryBar>
        </v-flex>

      </v-layout>
    </v-container>

    <!--<div id="body-container" style="top: 0;">-->
    <!--&lt;!&ndash; left sidebar &ndash;&gt;-->
      <!--<main class="column">-->
        <!--<HomeBody></HomeBody>-->
      <!--</main>-->

      <!--<nav id="left-sidebar" class="column">-->

        <!--<SideBar></SideBar>-->
      <!--</nav>-->



      <!--<aside id="right-sidebar" class="column">-->
        <!--<DirectoryBar></DirectoryBar>-->
      <!--</aside>-->
    <!--</div>-->
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
import SideBar from "../components/SideBar.vue";
import HomeBody from "../components/HomeBody";
import DirectoryBar from "../components/DirectoryBar";
import BlogFooter from "../components/BlogFooter";
import BlogHeader from "../components/BlogHeader";

export default {
  name: "home",
  components: {
    BlogFooter,
    DirectoryBar,
    HomeBody,
    SideBar,
    BlogHeader
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

#body-container {
  background-color: #424242;
}

/*header,*/
/*footer {*/
/*flex: 1;*/
/*}*/

#body-container {
  display: flex;
  flex: 1;
}

#left-sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

main {
  flex: 1;
  margin-top: 20px;
}

nav,
aside {
  flex: 0 0 12em;
}

nav {
  order: -1;
}
</style>

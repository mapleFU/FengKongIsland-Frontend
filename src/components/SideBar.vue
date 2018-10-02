<template>
    <v-navigation-drawer
            permanent
            style="background: #9E9E9E;"
    >
        <!--list-->
        <v-list
                align-center="true"
                align-content-center
                class="use-bkg"
        >
            <!--should i justify centor...-->
            <v-layout justify-center>
                <Avatar />
            </v-layout>
        </v-list>

        <!--title-->
        <v-toolbar flat
                   class="grey darken-2"
        >
            <v-list-tile style="margin: 0 auto;">
                <v-list-tile-title class="title text-lg-center">
                    风空之枫
                </v-list-tile-title>
            </v-list-tile>
        </v-toolbar>



        <div class="describe-text">
            <p v-for="text in text_lists" :key="text" class="text-md-center"> {{ text }} </p>
        </div>


        <v-list>
            <NaviListTile
                    v-for="nav_link in nav_links"
                    :key="nav_link.title"
                    :tag_name="nav_link.title"
                    :link_to="nav_link.link_to"
            />
            <!--<v-divider></v-divider>-->

            <!--<v-flex xs12 sm6 offset-sm3>-->


                <!--<v-list-tile-->
                        <!--class="d-inline-flex"-->
                        <!--v-on:click="null"-->
                <!--&gt;-->
                    <!--<v-list-tile-action>-->
                        <!--<v-icon> send </v-icon>-->
                    <!--</v-list-tile-action>-->

                    <!--<v-list-tile-content-->
                        <!--class="white&#45;&#45;text text-md-center"-->
                    <!--&gt;-->
                        <!--<v-list-tile-title class="text-md-center text&#45;&#45;lighten-10 list-content"> nmsl </v-list-tile-title>-->
                    <!--</v-list-tile-content>-->

                <!--</v-list-tile>-->
            <!--</v-flex>-->


        </v-list>


    </v-navigation-drawer>
</template>

<script>
import Avatar from "./Avatar";
import NaviListTile from "./NaviListTile";
export default {
  name: "SideBar",
  components: { NaviListTile, Avatar },
  data: function() {
    return {
      text_lists: [
        "undergraduate",
        "backend developer",
        "web/database/system",
        "acgn/sf",
        "stage1st/bangumi/douban er",
        "dispossessed"
      ],
      nav_links: [
        { title: "Home", link_to: "/home" },
        { title: "AboutMe", link_to: "/aboutMe" }
      ]
    };
  },
  computed: {
    description: function() {
      return this.text_lists.join("\n");
    }
  }
};
</script>

<style scoped>
Avator {
  margin: 0 auto;
  position: center;
  vertical-align: middle;
  display: flex;
  justify-content: center;
}

.describe-text {
  font-family: Monaco;
  font-size: 1.2em;
  text-align-all: center;
  line-height: 1.5em;
  font-weight: normal;

  margin: 0 auto;
  text-indent: 1.5em;
  /*background-color: #b388ff;*/
}
.describe-text > p {
  margin: 0 auto;
}

.use-bkg {
  background: url("../assets/lib.jpg");
}

.list-content {
  font-size: 1.2em;
}

NaviListTile {
  margin: 0 auto;
}
</style>

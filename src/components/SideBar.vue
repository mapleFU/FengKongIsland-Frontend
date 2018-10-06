<template>
    <div class="side-bar">
        <v-navigation-drawer
                permanent
                style="background: #9E9E9E;"
                elevation-10
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
            <v-expansion-panel
                    v-model="panel"
                    expand
                    name="description"
            >
                <v-expansion-panel-content
                        @click="panel[0] = !panel[0]"
                        style="background-color: #616161;"

                >
                    <div slot="header" class="text-md-center title" ><p>风空之枫</p></div>
                    <v-card>
                        <v-card-text class="grey lighten-1 describe-text">
                            <p v-for="text in text_lists" :key="text" class="text-md-center"> {{ text }} </p>
                        </v-card-text>
                    </v-card>

                </v-expansion-panel-content>
            </v-expansion-panel>


            <v-layout
                    align-center
                    justify-space-around
                    wrap
            >
                <v-avatar v-for="icon in icons" :key="icon.name">
                    <img
                            :src="icon.img"
                            alt="bangumi"
                    >
                </v-avatar>
            </v-layout>

        </v-navigation-drawer>
    </div>
</template>

<script>
import Avatar from "./Avatar";
import NaviListTile from "./NaviListTile";

import bgm_icon from "../assets/icon/bangumi-icon1.png";
import qq_icon from "../assets/icon/qq-icon.png";
import douban_icon from "../assets/icon/douban-icon.png";
import github_icon from "../assets/icon/github.png";
import tg_icon from "../assets/icon/tg_icon.png";

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
        "s1/bgm/douban er",
        "dispossessed"
      ],
      nav_links: [
        { title: "Home", link_to: "/home" },
        { title: "AboutMe", link_to: "/aboutMe" }
      ],
      panel: [false],
      icons: [
        {
          name: "bangumi",
          img: bgm_icon,
          link_to: "http://bangumi.tv/user/404373"
        },
        {
          name: "qq",
          img: qq_icon,
          link_to: "1506118561"
        },
        {
          name: "douban",
          img: douban_icon,
          link_to: "https://www.douban.com/people/77065352/"
        },
        {
          name: "github",
          img: github_icon,
          link_to: "https://github.com/mapleFU"
        },
        {
          name: "telegram",
          img: tg_icon,
          link_to: "nmsl"
        }
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

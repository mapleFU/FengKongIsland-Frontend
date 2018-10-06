<template>
    <div class="directory-bar">
        <v-navigation-drawer
                permanent
                style="background: #9E9E9E;"
        >
            <v-expansion-panel
                    dark
                    v-model="panel"
                    expand
                    name="description"
            >
                <v-expansion-panel-content
                        style="background-color: #616161;"
                >
                    <div slot="header" class="text-md-center title"><p>常用链接</p></div>

                    <v-list>
                        <NaviListTile
                                v-for="nav_link in nav_links"
                                :key="nav_link.title"
                                :tag_name="nav_link.title"
                                :link_to="nav_link.link_to"
                                class="inner"
                        />
                    </v-list>
                </v-expansion-panel-content>


                <v-expansion-panel-content
                        style="background-color: #616161;"
                >
                    <div slot="header" class="text-md-center title"><p>标签列表</p></div>

                    <!--render field-->
                    <template v-if="tags !== []">
                        <v-list>
                            <v-layout
                                    align-center
                                    justify-space-around
                                    wrap
                            >
                                <!--how to deal with link to-->

                                    <Tag v-for="tag in tags" :key="tag.tag_name" link_to="/home" :tag_name="tag.tag_name"></Tag>

                            </v-layout>
                        </v-list>
                    </template>
                </v-expansion-panel-content>

                <v-expansion-panel-content
                        style="background-color: #616161;"
                >
                    <div slot="header" class="text-md-center title"><p>文章目录</p></div>

                </v-expansion-panel-content>
            </v-expansion-panel>

        </v-navigation-drawer>
    </div>
</template>

<script>
import axios from "axios";

import NaviListTile from "./NaviListTile";
import Tag from "./Tag";
import { server_address } from "../constexpr";

const TagsQuery = "tags/";
export default {
  name: "DirectoryBar",
  components: { Tag, NaviListTile },
  data: function() {
    return {
      panel: [true, true, true],
      nav_links: [
        { title: "Home", link_to: "/home" },
        { title: "AboutMe", link_to: "/aboutMe" }
      ],
      tags: []
    };
  },
  created: function() {
    this.get_tags();
  },
  methods: {
    get_tags: function() {
      let requestUrl = "http://" + server_address + TagsQuery;
      // console.log(requestUrl);
      axios.get(requestUrl).then(resp => {
        // console.log(resp);
        for (let tag_data of resp.data["results"]) {
          this.tags.push(tag_data);
        }
      });
    }
  }
};
</script>

<style scoped>
.list-content {
  font-size: 1.2em;
}

.inner {
  background-color: #9e9e9e;
}
</style>

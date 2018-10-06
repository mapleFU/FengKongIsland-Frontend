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
                    <div class="inner">
                        <template v-if="tags !== []" class="inner">
                            <v-list>
                                <v-layout
                                        align-center
                                        justify-space-around
                                        wrap
                                >
                                    <!--how to deal with link to-->

                                        <Tag v-for="tag in tags" :key="tag.tag_name"
                                             link_to="/home"
                                             :tag_name="tag.tag_name"
                                             :count="tag.related_posts"></Tag>

                                </v-layout>
                            </v-list>
                        </template>
                    </div>
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

import { ZTree } from "vue2-lazy-tree";

const TagsQuery = "tags/";
export default {
  name: "DirectoryBar",
  components: { Tag, NaviListTile, ZTree },
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
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  },
  computed: {
    dynamicChildrenContext() {
      return {
        // here we could have some object,
        // $store reference for dispatching an action
        // or something else...
      };
    },
    // BUG in eslint: https://github.com/vuejs/eslint-plugin-vue/issues/420
    // --> using eslint-disable-next-line
    dynamicItems() {
      // create a new tree, but reuse existing children
      let calculatedTreeItems = {
        id: 0,
        name: "Root",
        children: [...this.items.children]
      };
      // let's make a new first child under the root which will have dynamic children
      let newFirstChild = {
        id: 100,
        name: "Dynamic Children are here",
        children: null
      };
      // eslint-disable-next-line
      calculatedTreeItems.children.unshift(newFirstChild);
      // we now check if the child has already been loaded
      if (this.dynamicallyLoadedChild) {
        // child is loaded - then make the children a regular array
        newFirstChild.children = [this.dynamicallyLoadedChild];
      } else {
        // there is no child yet loaded -> point children to a function!
        newFirstChild.children = this.loadDynamicChild;
      }
      return calculatedTreeItems;
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

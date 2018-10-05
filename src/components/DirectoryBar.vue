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
                <v-expansion-panel-content>
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

                <v-expansion-panel-content>
                    <div slot="header" class="text-md-center title"><p>标签列表</p></div>

                </v-expansion-panel-content>

                <v-expansion-panel-content>
                    <div slot="header" class="text-md-center title"><p>文章目录</p></div>

                </v-expansion-panel-content>
            </v-expansion-panel>

        </v-navigation-drawer>
    </div>
</template>

<script>
import NaviListTile from "./NaviListTile";
export default {
  name: "DirectoryBar",
  components: { NaviListTile },
  data: function() {
    return {
      panel: [false, false, false],
      nav_links: [
        { title: "Home", link_to: "/home" },
        { title: "AboutMe", link_to: "/aboutMe" }
      ]
    };
  }
};
</script>

<style scoped>
.list-content {
  font-size: 1.2em;
}

.inner {
  background-color: #e0e0e0;
}
</style>

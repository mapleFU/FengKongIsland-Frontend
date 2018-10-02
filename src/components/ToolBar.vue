<template>
    <v-toolbar dark color="#9E9E9E" v-model="drawer">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title> {{ title }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">

            <v-btn flat v-for="link in linking_list" :key="link.name" :to="link.link_to">
                {{ link.name }}
            </v-btn>

        </v-toolbar-items>


    </v-toolbar>
</template>

<script>
export default {
  name: "ToolBar",
  data: function() {
    return {
      title: "风空之岛",
      linking_list: [
        {
          name: "归档",
          link_to: "/archive"
        },
        {
          name: "目标",
          link_to: "/todolist"
        },
        {
          name: "链接",
          link_to: "/links"
        },
        {
          name: "介绍",
          link_to: "/aboutme"
        }
      ]
      // drawer: null
    };
  },
  props: {
    drawer: Boolean
  }
};
</script>

<style scoped>
/*v-toolbar {*/
/*dark: true;*/
/*color: "primary";*/
/*}*/
</style>

<template>
    <v-navigation-drawer
            permanent
            style="background: #5E35B1;"
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
        <v-toolbar flat >
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title text-lg-center" >
                        风空之枫
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <div class="describe-text">
            <p v-for="text in text_lists" :key="text"  class="text-md-center"> {{ text }} </p>
        </div>

        <v-list>
            <v-list-tile >

            </v-list-tile>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
import Avatar from "./Avatar";
export default {
  name: "SideBar",
  components: { Avatar },
  data: function() {
    return {
      text_lists: [
        "undergraduate",
        "backend developer",
        "web/database/system",
        "acgn/sf",
        "stage1st/bangumi/douban er",
        "dispossessed"
      ]
    };
  },
  computed: function() {
    return {
      description: this.text_lists.join("\n")
    };
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
  line-height: 2em;
  font-weight: normal;
  /*text-indent: 1.5em;*/
  background-color: #b388ff;
}
.describe-text > p {
  margin: 0 auto;
}

.use-bkg {
  background: url("../assets/lib.jpg");
}
</style>

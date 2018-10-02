<template>
    <div class="nav-list-tile" >
        <v-divider></v-divider>

        <!--<v-flex xs12 sm12>-->

            <!-- don't use inline-flex here -->
            <v-list-tile
                    :to="link_to"
            >
                <v-list-tile-action>
                    <v-icon> send </v-icon>
                </v-list-tile-action>

                <!--TODO: make clear how to make text in the middle-->
                <v-list-tile-content
                        class="white--text text-md-center list-content"
                        style="position: absolute; margin: 0; width: 50%; left: 25%;"
                >
                    <v-list-tile-title
                            lass="text-md-center text--lighten-10 list-content"
                            style="margin: 0 auto; text-align: center"
                    >
                        {{ tag_name }}
                    </v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>
        <!--</v-flex>-->
    </div>
</template>

<script>
export default {
  name: "NaviListTile",
  props: {
    link_to: String,
    tag_name: String
  },
  methods: {
    jump_to_link: function() {}
  }
};
</script>

<style scoped>
.list-content {
  font-size: 1.2em;
}

v-list-tile-content {
  position: absolute;
}
</style>

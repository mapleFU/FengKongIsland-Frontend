<template>
    <v-divider></v-divider>

    <v-flex xs12 sm6 offset-sm3>


        <v-list-tile
                class="d-inline-flex"
                v-on:click="null"
        >
            <v-list-tile-action>
                <v-icon> send </v-icon>
            </v-list-tile-action>

            <v-list-tile-content
                    class="white--text text-md-center"
            >
                <v-list-tile-title class="text-md-center text--lighten-10 list-content"> nmsl </v-list-tile-title>
            </v-list-tile-content>

        </v-list-tile>
    </v-flex>
</template>

<script>
export default {
  name: "DirectoryBar"
};
</script>

<style scoped>
.list-content {
  font-size: 1.2em;
}
</style>

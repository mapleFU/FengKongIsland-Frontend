<template>
    <div class="footer">
        <v-footer
                height="auto"
                style="width: 100%; margin: 0 auto; float: left;"
        >
            <v-card
                    flat
                    tile
                    color="#424242"
                    class="white--text text-xs-center"
                    style="width: 100%; margin: 0 auto; float: left;"
            >
                <!--<v-card-text>-->
                    <!--<v-btn-->
                            <!--v-for="icon in icons"-->
                            <!--:key="icon"-->
                            <!--class="mx-3 white&#45;&#45;text"-->
                            <!--icon-->
                    <!--&gt;-->
                        <!--<v-icon size="24px">{{ icon }}</v-icon>-->
                    <!--</v-btn>-->
                <!--</v-card-text>-->

                <v-card-text class="white--text pt-1" style="width: 100%; margin: 0 auto; float: left;">
                    托管于 Github <br>
                    七牛云 提供 CDN服务 <br>
                    Made with love by mwish <br>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    &copy;2018 — <strong>Vuetify</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
export default {
  name: "BlogFooter",
  data: () => ({})
};
</script>

<style scoped>
</style>

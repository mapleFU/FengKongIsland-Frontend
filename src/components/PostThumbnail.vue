<template>
    <div class="post-thumbnail">
        <v-layout>
            <v-flex xs12 offset1>
                <v-card color="grey darken-2" class="white--text">
                    <v-card-text>
                        <h2 class="headline" d-block> {{ title }}</h2>
                        <span class="content" >{{ blog_preview }}</span>
                    </v-card-text>

                    <v-layout>
                        <v-flex xs12 offset1>
                            <div class="tags" >
                                <v-layout>
                                    <v-flex md6 sm12>
                                        <v-chip v-for="tag in tags" :key="tag.name"
                                                :to="tag.to" :small="true" color="gray">
                                            <v-avatar color="blue">T</v-avatar>
                                            {{tag.name}}
                                        </v-chip>
                                    </v-flex>
                                </v-layout>
                            </div>
                            <div class="operations">
                                <v-btn flat color="blue">进入阅读</v-btn>
                            </div>
                        </v-flex>
                    </v-layout>
                    <!--<v-card-actions>-->
                        <!--<v-btn flat color="blue">进入阅读</v-btn>-->
                    <!--</v-card-actions>-->

                </v-card>


            </v-flex>
        </v-layout>


    </div>
</template>

<script>
export default {
  name: "PostThumbnail",
  data: function() {
    return {
      blog_preview: "你妈死了，我是你哥哥，我们都是你妈的儿子",
      title: "笑川大佐语录",
      blog_link: "/home",
      published_time: "1998-08-09",
      tags: [
        { name: "孙笑川", to: "/home" },
        { name: "博客", to: "/home" },
        { name: "打奶奶", to: "/home" }
      ]
    };
  }
};
</script>

<style scoped>
</style>

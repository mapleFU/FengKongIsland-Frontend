<template>
    <div class="post-thumbnail">
        <v-layout >
            <v-flex xs10 offset-xs1>
                <v-card color="grey darken-2" class="white--text"  elevation-10>
                    <v-card-text>
                        <h2 class="headline" d-block> {{ title }}</h2>
                        <p><span class="content" >{{ blog_preview }}</span></p>

                        <v-layout>
                            <v-flex xs12 offset1>

                                <div class="tags" >
                                    <v-layout>
                                        <v-flex md6 sm12>
                                            <Tag v-for="tag in tags"
                                                 :key="tag.name"
                                                 :link_to="tag.to"
                                                 :tag_name="tag.name"
                                            />

                                        </v-flex>
                                    </v-layout>
                                </div>

                            </v-flex>
                        </v-layout>

                    </v-card-text>

                    <div class="operations">
                        <v-btn flat color="blue">进入阅读</v-btn>
                    </div>

                </v-card>

            </v-flex>
        </v-layout>


    </div>
</template>

<script>
import Tag from "./Tag";
export default {
  name: "PostThumbnail",
    components: {Tag},
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

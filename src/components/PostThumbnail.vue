<template>
    <div class="post-thumbnail">
        <v-layout >
            <v-flex xs10 offset-xs1>
                <v-card color="grey darken-2" class="white--text"  elevation-10>
                    <v-card-text>
                        <h2 class="headline" d-block> {{ title }}</h2>
                        <p><span class="content" >{{ abstract }}</span></p>

                        <div class="tags" v-if="tags !== []">
                            <v-layout>
                                <v-flex xs12 offset1>


                                        <v-layout>
                                            <v-flex md6 sm12>
                                                <Tag v-for="tag in tags"
                                                     :key="tag.uuid"
                                                     :link_to="tag.to"
                                                     :tag_name="tag.tag_name"
                                                     :uuid="tag.uuid"
                                                />

                                            </v-flex>
                                        </v-layout>


                                </v-flex>
                            </v-layout>
                        </div>

                    </v-card-text>

                    <div class="operations">
                        <router-link :to="real_link" style="text-decoration: none;">
                            <v-btn flat color="blue">进入阅读</v-btn>
                        </router-link>

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
  props: {
    title: {
      required: true,
      type: String
    },
    blog_link: {
      required: false,
      type: String,
      default: "/post"
    },
    published_time: {
      required: false,
      type: String,
      default: "1998-08-09"
    },
    tags: {
      required: true,
      type: Array
    },
    abstract: {
      required: true,
      type: String
    },
    blog_id: {
      required: true,
      type: String
    }
  },
  components: { Tag },
  data: function() {
    return {};
  },
  computed: {
    real_link: function() {
      return this.blog_link + "/" + this.blog_id;
    }
  }
};
</script>

<style scoped>
</style>

<template>
    <v-container class="post-thumbnail">
        <v-layout >
            <v-flex xs10 offset-xs1>
                <p class="display-1 font-weight-light white--text">
                    <router-link :to="real_link"  style="text-decoration: none;" class="display-1 font-weight-light white--text">
                        {{title}}
                    </router-link>
                </p>


                <p class="caption font-weight-bold grey--text">发布于: {{ published_time }} </p>
                <section class="body-2">
                    {{abstract}}
                </section>

            </v-flex>
        </v-layout>


    </v-container>
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

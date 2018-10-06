<template>
    <a :href="link_to">
        <v-chip :small="true" color="gray" :to="link_to">
            <v-icon>tag</v-icon>
            <span class="inner_text"> {{ tag_name }} </span>
            <span v-if="count !== null" style="margin-left: 5px;"> {{ count }}</span>
        </v-chip>
    </a>
    <!--<v-chip v-for="tag in tags" :key="tag.name"-->
            <!--:to="tag.to" :small="true" color="gray">-->
        <!--<v-icon>tag</v-icon>-->
        <!--&lt;!&ndash;<v-avatar color="blue">T</v-avatar>&ndash;&gt;-->
        <!--{{tag.name}}-->
    <!--</v-chip>-->
</template>

<script>
export default {
  name: "Tag",
  // props: ["tag_name", "link_to", "count"]
  props: {
    tag_name: {
      required: true,
      type: String
    },
    link_to: {
      required: false,
      default: "/home",
      type: String
    },
    count: {
      required: false,
      default: null,
      type: [Number, null]
    }
  }
};
</script>

<style scoped>
</style>

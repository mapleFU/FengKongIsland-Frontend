<template>
    <a :href="link_to">
        <v-chip :small="true" color="gray" :to="link_to">
            <v-icon>tag</v-icon>
            {{ tag_name }}
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
  props: ["tag_name", "link_to"]
};
</script>

<style scoped>
</style>

<template>
    <v-parallax
            :src="emt"
    >
        <v-layout
                align-center
                column
                justify-center
        >
            <h1 class="display-2 font-weight-thin mb-3">风空之岛</h1>
            <h4 class="subheading">冒险者的遥远故乡</h4>
        </v-layout>
    </v-parallax>
</template>

<script>
import emt from "../assets/emt.jpg";

export default {
  name: "Parallax",
  data: function() {
    return {
      emt: emt
    };
  }
};
</script>

<style scoped>
</style>

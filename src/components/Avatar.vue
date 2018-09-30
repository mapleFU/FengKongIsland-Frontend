<template>
    <div class="avatar">
        <v-avatar
            :tile="tile"
            :size="avatarSize"
            color="grey lighten-4"
            :style="style"
        >
            <img src="../assets/chito1.jpeg" alt="avatar">

                <!--<img alt="Vue logo" src="../assets/logo.png">-->
        </v-avatar>

        <!--<p>MWish</p>-->
    </div>
</template>

<script>
export default {
  name: "Avatar",
  data: function() {
    return {
      tile: false,
      avatarSize: 150,
      avatarSrc: "../assets/chito2.jpeg",
      // css transform turn
      turn: 0
    };
  },
  computed: {
    style() {
      return { transform: "rotate(" + this.turn + "turn)" };
    }
  },
  created: function() {
    setInterval(() => {
      this.turn += 0.005;
    }, 20);
  }
};
</script>

<style scoped>
</style>

<template>
  <v-app>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-bottom-navigation
      :value="activeBtn"
      color="purple lighten-1"
      class="pt-2"
    >
      <v-btn @click="goto('/')">
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn @click="goto('/favorites')">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn @click="goto('/add-video')">
        <span>Add</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>


<script>
export default {
  components: {},
  methods: {
    goto(path) {
      if (path != this.$route.fullPath) {
        this.$router.push(path);
      }
    }
  },
  data() {
    return {
      activeComponent: "recents",
      activeBtn: 0
    };
  }
};
</script>


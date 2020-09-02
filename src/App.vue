<template>
  <v-app>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <Recents v-if="activeComponent === 'recents'" />
        <Favorites v-if="activeComponent === 'favorite'" />
        <Add v-if="activeComponent === 'add'" />

      </v-container>
    </v-main>

    <v-bottom-navigation :value="activeBtn" color="purple lighten-1" class="pt-2">
      <v-btn @click="activeComponent='recents'">
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn @click="activeComponent='favorite'">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn @click="activeComponent='add'">
        <span>Add</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>


<script>

import Recents from "@/components/Recents.vue";
import Favorites from "@/components/Favorites.vue";
import Add from "@/components/Add.vue";

export default {
  components: {
    Recents,
    Favorites,
    Add
  },
  data() {
    return {
      activeComponent: "recents",
      activeBtn: 0
    };
  }
};
</script>


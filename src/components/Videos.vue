<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col
              class="d-flex child-flex"
              cols="4"
              v-for="video in videos"
              v-bind:key="video.videoId"
            >
              <router-link :to="'video/' + video.videoId">
                <v-card flat tile class="d-flex">
                  <v-img
                    :src="video.image"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  ></v-img>
                </v-card>
              </router-link>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["videos"]
};
</script>

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
              <v-card flat tile class="d-flex">
                <v-img :src="video.image" aspect-ratio="1" class="grey lighten-2"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      videos: []
    };
  },
  async mounted() {

    let result = await fetch("http://localhost:3000/videos");

    this.videos = await result.json();
  }
};
</script>
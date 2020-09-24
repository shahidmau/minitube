<template>
  <Videos :videos="videos" />
</template>


<script>
import Videos from "@/components/Videos.vue";

export default {
  components: {
    Videos
  },

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
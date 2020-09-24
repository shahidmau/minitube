<template>
  <div class="d-flex justify-center">
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${$route.params.videoId}`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

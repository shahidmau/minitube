<template>
  <div>
    <button @click="data=null">Reset</button>
    <input type="text" v-model="data" />
    {{data}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null
    };
  }
};
</script>

<style scoped>
button {
  color: orange;
  border: 1px dashed pink;
}

input {
  color: orange;
  border: 1px dashed red;
  padding: 4px;
}

div {
  border: 1px solid #ccc;
  margin: 5px;
}
</style>
<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
}
</style>
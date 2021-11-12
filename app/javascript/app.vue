<template>
  <!-- <div>
    <router-link to="/" tag="button">Home</router-link>
    <router-link to="/article/5">記事 NO.5</router-link>
    <router-link to="/article/33">記事 NO.33</router-link>
  </div> -->
  <!-- router-viewにコンポーネントが描画される -->
  <router-view/>

</template>

<script>
</script>

<style scoped>
a {
  color: blue;
  text-decoration: none;
}

/* リンクがアクティブになっているときに適用 */
a.router-link-exact-active {
  color: black;
  font-weight: bold;
}
</style>
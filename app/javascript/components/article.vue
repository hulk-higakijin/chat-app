<template>
  <p>記事No：{{ id }}</p>
</template>

<script>
export default {  
  name: 'Article',  
  data () {
    return {
      id: 0
    }
  },
  
  created() {
    this.id = this.$route.params.id
  },
  
  // $routeが変更されたときにidを再設定する
  watch: {
    '$route'(to, from) {
      this.id = to.params.id
    }
  }
}
</script>
 
<style scoped>
</style>
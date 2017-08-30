<template>
  <div class="well">
    <img v-bind:src="catImgSrc" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        catImgSrc: 'http://thecatapi.com/api/images/get?size=med'
      }
    }
  }
</script>

<style scoped>
</style>

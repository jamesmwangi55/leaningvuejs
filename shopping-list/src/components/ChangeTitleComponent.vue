<!--change title template-->
<template>
  <div>
    <em>Change the title of your shopping list here</em>
    <input type="text" v-model="mutableTitle">
  </div>
</template>

<script>
  export default {
    props: ['title'],
    data () {
      return {
        mutableTitle: this.title
      }
    }
  }
</script>

<style scoped>

</style>

<!--items list template-->
<template id="items-template">
  <ul>
    <item-component v-for="item in items" :item="item"></item-component>
  </ul>
</template>

<script>
  import Vue from 'vue'
  Vue.component('items-component', {
    template: '#items-template',
    props: ['items']
  })
</script>

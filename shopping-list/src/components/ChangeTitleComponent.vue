<!--change title template-->
<template id="change-title-template">
  <div>
    <em>Change the title of your shopping list here</em>
    <input v-bind:value="value" v-on:input="onInput"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  Vue.component('change-title-component', {
    template: '#change-title-template',
    props: ['value'],
    methods: {
      onInput: function (event) {
        this.$emit('input', event.target.value)
      }
    }
  })
</script>

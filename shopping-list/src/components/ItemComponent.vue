<!--list item template-->
<template id="item-template">
  <li :class="{ 'removed': item.checked }">
    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="item.checked"> {{ item.text }}
      </label>
    </div>
  </li>
</template>


<script>
  import Vue from 'vue'
  Vue.component('item-component', {
    template: '#item-template',
    props: ['item']
  })
</script>

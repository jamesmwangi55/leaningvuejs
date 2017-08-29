<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <add-item-component></add-item-component>
    <items-component :items="items"></items-component>
    <div class="footer">
      <hr>
      <change-title-component v-model="title"></change-title-component>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>

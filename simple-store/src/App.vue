<template>
  <div id="app">
    <show-greetings-component></show-greetings-component>
    <change-greeting-component></change-greeting-component>
  </div>
</template>

<script>
  import ShowGreetingsComponent from './components/ShowGreetingsComponent.vue'
  import ChangeGreetingComponent from './components/ChangeGreetingComponent.vue'

  import store from './vuex/store'

  export default {
    components: {ShowGreetingsComponent, ChangeGreetingComponent},
    store
  }

</script>

<style>

</style>

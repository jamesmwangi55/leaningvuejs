<template>

</template>

<script>
  import AddItemComponent from './components/AddItemComponent.vue'
  import ItemsComponent from './components/ItemsComponent.vue'
  import ChangeTitleComponent from './components/ChangeTitleComponent.vue'

  export default {
    components: {
      AddItemComponent,
      ItemsComponent,
      ChangeTitleComponent
    },
    data () {
      return {
        items: [{text: 'Bananas', checked: true},
          {text: 'Apples', checked: true}]
      }
    },
    methods: {
      addItem (text) {
        this.items.push({
          text: text,
          checked: false
        })
      }
    }
  }
</script>

<style>

</style>

<template>
  <div>
    <h2>{{ title }}</h2>
    <add-item-component :items="items" v-on:add="addItem"></add-item-component>
    <items-component :items="items"></items-component>
    <div class="footer">
      <hr>
      <change-title-component v-on:changeTitle="onChangeTitle"></change-title-component>
    </div>
  </div>
</template>

<script>
  import AddItemComponent from './AddItemComponent.vue'
  import ItemsComponent from './ItemsComponent.vue'
  import ChangeTitleComponent from './ChangeTitleComponent.vue'

  export default {
    components: {
      AddItemComponent,
      ItemsComponent,
      ChangeTitleComponent
    },
    props: ['id', 'title', 'items'],
    methods: {
      addItem (text) {
        this.items.push({
          text: text,
          checked: false
        })
      },
      onChangeTitle (text) {
        this.$emit('changeTitle', this.id, text)
      }
    }
  }
</script>

<style>
  .footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }
</style>

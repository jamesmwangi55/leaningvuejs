<!--add new item template-->
<template>
  <div>
    <div class="input-group">
      <input type="text" class="input form-control" v-model="newItem" @keyup.13="addItem" placeholder="add shopping list item">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="addItem">Add!</button>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newItem: ''
      }
    },
    props: ['items'],
    methods: {
      addItem () {
        var text

        text = this.newItem.trim()
        if (text) {
          this.items.push({
            text: text,
            checked: false
          })
          this.newItem = ''
        }
      }
    }
  }
</script>

<style scoped>

</style>

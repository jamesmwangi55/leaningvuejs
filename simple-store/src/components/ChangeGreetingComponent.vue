<template>
  <input :value="getMessage" @keyup="changeMsg">
</template>

<script>

  import { mapGetters } from 'vuex'
  import  { CHANGE_MSG } from '../vuex/mutation_types'

  export default {
    computed: mapGetters(['getMessage']),
    methods: {
      changeMsg(ev){
        this.$store.commit(CHANGE_MSG, ev.target.value)
      }
    }
  }
</script>

<style scoped>

</style>
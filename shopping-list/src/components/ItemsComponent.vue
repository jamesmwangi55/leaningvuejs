<!--items list template-->
<template id="items-template">
  <ul>
    <item-component v-for="item in items" :item="item">
    </item-component>
  </ul>
</template>

<template>
    <div>
       <template v-for="item in routes">
         {{item.children[0].name}}
       </template>
    </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>

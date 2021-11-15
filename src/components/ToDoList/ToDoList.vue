<template>
  <div>
    <div v-for="(item, index) of items" v-bind:key="index + 1">
      <ToDoItem :item="item" />
    </div>
  </div>
</template>

<script>
import ToDoItem from "../ToDoItem/ToDoItem.vue";
export default {
  components: { ToDoItem },
  props: ["items"],
};
</script>

<style></style>

<template>
  <div>
    <input
      type="text"
      id="input_1"
      data-testid="todo-input"
      v-model="newTodo"
    />
    <button data-testid="todo-submit" @click.prevent="addTodo">Add</button>
    <ToDoList :items="items" />
  </div>
</template>

<script>
import ToDoList from "../../components/ToDoList/ToDoList.vue";
export default {
  components: { ToDoList },
  data() {
    return {
      todos: "",
      newTodo: "",
      items: [],
    };
  },
  methods: {
    addTodo() {
      this.todos = this.newTodo;
    },
  },
};
</script>

<style></style>

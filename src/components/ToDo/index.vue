<template>
  <div>
    <h2 class="mb-4">{{ title }}</h2>
    <input
      type="text"
      data-testid="todo-input"
      placeholder="Add todo item..."
      class="border border-gray-300 p-1 text-blue-700"
      v-model="newTodo"
    />
    <button
      class="px-3 py-1 text-white bg-blue-500 mb-4"
      data-testid="todo-submit"
      @click.prevent="addTodo"
    >
      Add
    </button>
    <ul data-testid="todos" class="text-left">
      <li
        v-for="(todo, todoKey) of todos"
        :data-testid="`todo-${todoKey}`"
        :key="todoKey"
        class=""
      >
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      todos: [],
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

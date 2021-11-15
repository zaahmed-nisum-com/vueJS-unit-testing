import { shallowMount, mount } from "@vue/test-utils";
import Todo from "../../../src/components/ToDo";

describe("The Todo.vue component", () => {
  test("snapshot", () => {
    const wrapper = mount(Todo);
    expect(wrapper.find("div")).toMatchSnapshot(true);
  });

  test("Displays the title when passed as a prop", () => {
    const wrapper = shallowMount(Todo, {
      propsData: {
        title: "A random title",
      },
    });
    expect(wrapper.text()).toMatch("A random title");

    const wrapper2 = shallowMount(Todo, {
      propsData: {
        title: "Another random one",
      },
    });
    expect(wrapper2.text()).toMatch("Another random one");
  });

  describe("adding todo items", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(Todo, {
        propsData: {
          title: "My list",
        },
      });
    });

    async function addTodo(todoText) {
      wrapper.find('[data-testid="todo-input"]').setValue(todoText);
      await wrapper.find('[data-testid="todo-submit"]').trigger("click");
    }

    function elementText(testId) {
      return wrapper.find(`[data-testid="${testId}"]`).text();
    }

    test("allows for adding one todo item", async () => {
      await addTodo("My first todo item");
      expect(elementText("todos")).toContain("My first todo item");
    });

    test("allows for more than one todo item to be added", async () => {
      await addTodo("My first todo item");
      await addTodo("My second todo item");
      expect(elementText("todos")).toContain("My first todo item");
      expect(elementText("todos")).toContain("My second todo item");
    });

    test("empties the input field when todo has been added", async () => {
      await addTodo("This is not important");
      expect(wrapper.find('[data-testid="todo-input"]').element.value).toEqual(
        ""
      );
    });

    test("displays the items in the order they are entered", async () => {
      await addTodo("First");
      await addTodo("Second");
      expect(elementText("todo-0")).toMatch("First");
      expect(elementText("todo-1")).toMatch("Second");
    });
  });
});

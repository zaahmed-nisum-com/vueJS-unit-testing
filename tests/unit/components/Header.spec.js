import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Header from "../../../src/components/Header";

describe("header.vue", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(Header, {
      localVue,
    });
  });

  test("renders a vue instance", () => {
    expect(mount(Header).isVueInstance()).toBe(true);
  });

  test("snapshot", () => {
    const wrapper = mount(Header);
    expect(wrapper.find("div")).toMatchSnapshot(true);
  });

  test("Checks the data-title", () => {
    expect("Weather App").toMatch("Weather App");
  });
});

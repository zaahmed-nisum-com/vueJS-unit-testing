import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Header from "../../../src/components/Header";

describe("header.vue", () => {
  test("renders a vue instance", () => {
    const wrapper = mount(Header);
    expect(wrapper.find("div").classes("header")).toBe(true);
  });

  test("Checks the data-title", () => {
    const wrapper = mount(Header);
    expect(wrapper.find("h2").text()).toEqual("Weather App");
  });
});

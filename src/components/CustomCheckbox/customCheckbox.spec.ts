import { mount } from "@vue/test-utils";
import CustomCheckbox from "./Index.vue";
import { describe, it, expect } from "vitest";
import { ref } from "vue";

describe("CustomCheckbox.vue", () => {

  it("should exists", () => {
    const wrapper = mount(CustomCheckbox);
    expect(wrapper.exists()).toBe(true);
  });

  it("should be able to toggle a value", () => {
    const parent = mount({
      template: '<CustomCheckbox v-model="isChecked"></CustomCheckbox>',
      setup() {
        const isChecked = ref(false)
        return { isChecked };
      },
      components: { 'CustomCheckbox': CustomCheckbox }
    })

    const checkbox = parent.find('div')
    checkbox.trigger('click');
    expect( parent.vm.isChecked).toBe(true);
    checkbox.trigger('click');
    expect( parent.vm.isChecked).toBe(false);
  });
});
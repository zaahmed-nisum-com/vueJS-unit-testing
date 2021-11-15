import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import ToDoItem from '../../../src/components/ToDoItem/ToDoItem.vue'

describe('ToDoItem.vue', () => {
    test('snapshot', () => {
        const wrapper = mount(ToDoItem, {
            propsData: {
                item: []
            }
        })
        expect(wrapper.find('div')).toMatchSnapshot(true)
    })

})
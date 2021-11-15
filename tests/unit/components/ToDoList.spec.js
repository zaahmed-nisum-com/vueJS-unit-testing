import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import ToDoList from '../../../src/components/ToDoList/ToDoList.vue'


describe('ToDoList.vue', () => {
    test('snapshot', () => {
        const wrapper = mount(ToDoList, {
            propsData: {
                item: []
            }
        })
        expect(wrapper.find('div')).toMatchSnapshot(true)
    })

    test('check array props', () => {
        const wrapper = mount(ToDoList, {
            propsData: {
                item: {}
            }
        })
        expect(wrapper.props().item).toEqual(expect.arrayContaining([]))
    })

})

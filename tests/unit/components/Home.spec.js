import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Home from '../../../src/pages/Home/Home.vue'


describe('Home.vue', () => {

    // test('snapshot', () => {
    //     const wrapper = mount(Home)
    //     expect(wrapper.find('div')).toMatchSnapshot(true)
    // })

    test('allows for adding one todo item', async () => {
        const wrapper = mount(Home)
        wrapper.find('#input_1').setValue('My first todo item')
        // await wrapper.find('[data-testid="todo-submit"]').trigger('click')
        // expect(wrapper.find('[data-testid="todos"]').text()).toContain('My first todo item')
    })
})
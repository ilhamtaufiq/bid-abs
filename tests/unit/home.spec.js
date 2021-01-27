import { shallowMount } from '@vue/test-utils'
import Dashboard from '@/views/2020/Dashboard.vue'

test('Hello', () => {
  // render the component
  const wrapper = shallowMount(Dashboard)

  // should not allow for `username` less than 7 characters, excludes whitespace

  // assert the error is rendered
  expect(wrapper.find('.error').exists()).toBe(true)

  // update the name to be long enough

  // assert the error has gone away
  expect(wrapper.find('.error').exists()).toBe(false)
})


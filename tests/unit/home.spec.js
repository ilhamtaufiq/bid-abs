import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Dashboard from '@/views/2020/Dashboard.vue'

describe('Dashboard', () => {

  // First Test Case
  it ('Sudah dirender dengan benar', () => {
    let wrapper = shallowMount(Dashboard);

    expect(wrapper.find('h1').text()).to.equal('Bidang Air Bersih dan Sanitasi Dalam Data');

  })
});

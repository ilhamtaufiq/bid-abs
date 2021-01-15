import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Rekapkegiatan from '@/views/2020/TableDataKontrak.vue'

describe('Rekapkegiatan', () => {

  // First Test Case
  it ('Sudah dirender dengan benar', () => {
    let wrapper = shallowMount(Rekapkegiatan);

    expect(wrapper.find('vs-th').text()).to.contain('Desa');

  })
});

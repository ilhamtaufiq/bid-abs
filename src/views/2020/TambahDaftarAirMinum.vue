<template>
<vx-card>
<h3>Tambah data</h3>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
     <!-- <vs-input  class="w-full" label-placeholder="Pekerjaan" v-model="dataAirMinum.nama_pekerjaan" /> -->
      <vs-select autocomplete v-model.text="dataAirMinum.nama_pekerjaan" class="w-full select-large" label="Pekerjaan" placeholder="Pilih Pekerjaan">
          <vs-select-item :v-model.text="dataAirMinum.nama_pekerjaan" :name="dataAirMinum.nama_pekerjaan" :key="index" :value="item.pekerjaan" :text="item.pekerjaan" v-for="(item,index) in datakontrak" class="w-full" />
      </vs-select>
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input type="number" class="w-full" label-placeholder="Jumlah SR" v-model.number="dataAirMinum.jumlah_sr" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input type="number" class="w-full" label-placeholder="Panjang Pipa" v-model.number="dataAirMinum.panjang_pipa" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input type="number"  class="w-full" label-placeholder="Penduduk Terlayani" v-model.number="dataAirMinum.penduduk_terlayani" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-6">
      <vs-input class="w-full" label-placeholder="Nama Pengelola" v-model="dataAirMinum.nama_pengelola" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col w-full">
      <vs-button class="mr-3 mb-2" @click="addAirMinum">Tambah</vs-button>
    </div>
  </div>
</vx-card> 
</template>

<script>
import {addAirMinum, getAirMinum} from '@/graphql/AirMinum.gql'
import VxCard from '../../components/vx-card/VxCard.vue'
import gql from "graphql-tag"

export default {
  data:() => ({
    datakontrak:[],
     dataAirMinum: {
        nama_pekerjaan: '',
        jumlah_sr: null,
        panjang_pipa: null,
        penduduk_terlayani: null,
        nama_penegelola: '',
        },
    }),

  computed:{
  },
  apollo:{
    datakontrak:{
      query: getAirMinum,
      variables () {
        // don't do stupid thing, please.
    
      },
      update ({rekapKegiatans}) {
        return rekapKegiatans
      },
    }
  },

  methods: {
        async addAirMinum(){
            let {data} = await this.$apollo.mutate({
                mutation: addAirMinum,
                variables: this.dataAirMinum,
                optimisticResponse: {
                      __typename: 'Mutation',
                      createRekapKegiatan: {
                        __typename: 'airMinum',
                        nama_pekerjaan: this.dataAirMinum.nama_pekerjaan,
                        jumlah_sr: this.dataAirMinum.jumlah_sr,
                        panjang_pipa: this.dataAirMinum.panjang_pipa,
                        penduduk_terlayani: this.dataAirMinum.penduduk_terlayani,
                        nama_penegelola: this.dataAirMinum.nama_penegelola,
                                },
                            },
            });
            console.log("DATA", data)
            window.location.replace("/2020/airminum");
        },
    },

    components: {
        VxCard
    }
}
</script>
        

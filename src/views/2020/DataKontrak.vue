<template>
<vx-card>
<h3>{{ editMode ? 'Edit Data' : 'Tambah Data' }}</h3>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input disabled class="w-full" label="Program" placeholder="Pengembangan Kinerja Air Minum, Sanitasi dan Air Limbah" v-model="newKontrak.program" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input v-validate="'required'"  class="w-full" label-placeholder="Kegiatan" v-model="newKontrak.kegiatan" />
          <span class="text-danger text-sm" v-show="errors.has('kegiatan')">{{ errors.first('kegiatan') }}</span>
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input v-validate="'required'"  class="w-full" label-placeholder="Pekerjaan" v-model="newKontrak.pekerjaan" />
          <span class="text-danger text-sm" v-show="errors.has('pekerjaan')">{{ errors.first('pekerjaan') }}</span>

    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input v-validate="'required'"  class="w-full" label-placeholder="Desa" v-model="newKontrak.desa" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input v-validate="'required'"  class="w-full" label-placeholder="Kecamatan" v-model="newKontrak.kecamatan" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-6">
      <vs-input v-validate="'required'"  class="w-full" label-placeholder="Nomor Kontrak" v-model="newKontrak.nomor_kontrak" />
    </div>
  </div>
    <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input v-currency="{currency: 'IDR', locale: 'id'}" v-validate="'required'"  class="w-full" label-placeholder="Nilai Kontrak" v-model.number="newKontrak.nilai_kontrak" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-6">
      <vs-input v-validate="'required'"  class="w-full" label-placeholder="Nama Rekanan" v-model="newKontrak.nama_rekanan" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-6">
      <vs-input v-validate="'required'"  type="date" class="w-full" label-placeholder="Mulai" v-model="newKontrak.tgl_mulai" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-6">
      <vs-input v-validate="'required'"  type="date" class="w-full" label-placeholder="Selesai" v-model="newKontrak.tgl_selesai" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col w-full">
      <vs-button v-if="!editMode" class="mr-3 mb-2" @click="addNewKontrak">Tambah</vs-button>
      <vs-button v-else class="mr-3 mb-2" @click="updateKontrak">ubah</vs-button>
    </div>
  </div>
</vx-card> 
</template>

<script>
import {createRekapKegiatan, updateKontrak, dataKontrak} from '@/graphql/dataKontrak.gql'
import VxCard from '../../components/vx-card/VxCard.vue'
import gql from "graphql-tag"

export default {
  data:() => ({
     newKontrak: {
        program: 'Pengembangan Kinerja Air Minum, Sanitasi dan Air Limbah',
        kegiatan: '',
        pekerjaan: '',
        desa: '',
        kecamatan: '',
        nomor_kontrak: '',
        nilai_kontrak: '',
        nama_rekanan: '',
        tgl_mulai: null,
        tgl_selesai: null,
        },
    updateKontrakMutation: `

    `,

    }),

  computed:{
      editMode() {
          return !!this.$route.query.edit;
      }
  },


  methods: {

        async addNewKontrak(){
            let {data} = await this.$apollo.mutate({
                mutation: createRekapKegiatan,
                variables: this.newKontrak,
                optimisticResponse: {
                      __typename: 'Mutation',
                      createRekapKegiatan: {
                        __typename: 'rekapKegiatan',
                        program: this.newKontrak.program,
                        kegiatan: this.newKontrak.kegiatan,
                        pekerjaan: this.newKontrak.pekerjaan,
                        desa: this.newKontrak.desa,
                        kecamatan: this.newKontrak.kecamatan,
                        nomor_kontrak: this.newKontrak.nomor_kontrak,
                        nilai_kontrak: this.newKontrak.nilai_kontrak,
                        nama_rekanan: this.newKontrak.nama_rekanan,
                        tgl_mulai: this.newKontrak.tgl_mulai,
                        tgl_selesai: this.newKontrak.tgl_selesai,   
                                },
                            },
            });
            window.location.replace("/2021/rekapkegiatan");
            
            
        },
        async getKontrak() {
            let {data} = await this.$apollo.query({
                query: dataKontrak,
                variables: {
                    id: this.$route.query.edit
                }
            });
            console.log("DATA", data); 
            this.newKontrak = data.rekapKegiatan;
        },
        async updateKontrak() {
            let {data} = await this.$apollo.mutate({
                mutation: updateKontrak,
                variables: {
                    ...this.newKontrak,
                    id: this.$route.query.edit
                }
            });
            window.location.replace("/2021/rekapkegiatan");
        }
    },
    created(){
        if(this.editMode){
            this.getKontrak();
        }
    },

    components: {
        VxCard
    }
}
</script>
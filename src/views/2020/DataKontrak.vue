<template>
  <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null"  @on-complete="createRekapKegiatan(program,kegiatan,pekerjaan,desa,kecamatan,nomor_kontrak,nilai_kontrak,nama_rekanan,tgl_mulai,tgl_selesai)">
      <tab-content title="Step 1" class="mb-5" icon="feather icon-home">
          <!-- tab 1 content -->
          <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full mt-5">
                  <vs-input type="text" label="Program" name="program" v-model="program" class="w-full" />
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                  <vs-input label="Kegiatan"  v-model="kegiatan" class="w-full" />
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                  <vs-input label="Pekerjaan"  v-model="pekerjaan" class="w-full" />
              </div>
               <div class="vx-col md:w-1/2 w-full mt-5">
                  <vs-input type="text" label="Desa" name="desa" v-model="desa" class="w-full" />
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                  <vs-input label="Kecamatan"  v-model="kecamatan" class="w-full" />
              </div>
             <!--- <div class="vx-col md:w-1/5 w-full mt-5">
                  <vs-select v-model="kecamatan" @change="kecamatan" name="kecamatan" item-value="kecamatan" class="w-full select-large" label="Kecamatan">
                     <vs-select-item :value="location.nama_kecamatan" v-for="location in locations" :key="location.id" :text="location.nama_kecamatan" class="w-full" />
                  </vs-select>
              </div>
                <div class="vx-col md:w-1/5 w-full mt-5">    
                    <vs-select v-model="desa"  name="desa" item-value="desa" class="w-full select-large" label="Kecamatan">
                     <vs-select-item v-for="location in locations" v-bind:value="location.desa" :key="location.desa_id.desa" :text="location.desa.desa_id" :class="w-full" />
                  </vs-select>          
                </div>
                -->
          </div>
      </tab-content>

      <!-- tab 2 content -->
      <tab-content title="Step 2" class="mb-5" icon="feather icon-briefcase">
          <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full">
                  <vs-input label="Nomor Kontrak" v-model="nomor_kontrak" class="w-full mt-4" />
                  <vs-input label="Nilai Kontrak"  v-model="nilai_kontrak" class="w-full mt-4" />
              </div>
              <div class="vx-col md:w-1/2 w-full">
                  <vs-input label="Nama Rekanan" v-model="nama_rekanan" class="w-full mt-4" />
              </div>
          </div>
      </tab-content>

      <!-- tab 3 content -->
      <tab-content title="Step 3" class="mb-5" icon="feather icon-image">
          <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full">
                  <vs-input type="date" label="Tanggal Mulai" v-model="tgl_mulai" class="w-full mt-5" />
              </div>
              <div class="vx-col md:w-1/2 w-full">
                  <vs-input type="date" label="Tanggal Selesai" v-model="tgl_selesai" class="w-full mt-5" />
              </div>
          </div>
      </tab-content>
  </form-wizard>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import createRekapKegiatan from '@/graphql/dataKontrak.gql'
import {getLokasi, getDesa} from '@/graphql/getLokasi.gql'

export default {
  data() {
    return {
        program: '',
        kegiatan: '',
        pekerjaan: '',
        desa: '',
        kecamatan: '',
        nomor_kontrak: '',
        nilai_kontrak: '',
        nama_rekanan: '',
        tgl_mulai: null,
        tgl_selesai: null,
        locations:[],
    }
  },

  apollo:{
    locations:{
      query: getDesa,
      variables () {
        // don't mess up, please.
      },
      update ({lokasis}) {
        return lokasis
      },
    }
  },

  methods: {
        createRekapKegiatan(){
        const program = this.program;
        const kegiatan = this.kegiatan;
        const pekerjaan = this.pekerjaan;
        const desa = this.desa;
        const kecamatan = this.kecamatan;
        const nomor_kontrak = this.nomor_kontrak;
        const nilai_kontrak = this.nilai_kontrak;
        const nama_rekanan = this.nama_rekanan;
        const tgl_mulai = this.tgl_mulai;
        const tgl_selesai = this.tgl_selesai;
        this.$apollo.mutate({
            mutation: createRekapKegiatan,
            variables:{
                program: program,
                kegiatan: kegiatan,
                pekerjaan: pekerjaan,
                desa: desa,
                kecamatan: kecamatan,
                nomor_kontrak: nomor_kontrak,
                nilai_kontrak: nilai_kontrak,
                nama_rekanan: nama_rekanan,
                tgl_mulai: tgl_mulai,
                tgl_selesai: tgl_selesai
            },
                    optimisticResponse: {
                      __typename: 'Mutation',
                      createRekapKegiatan: {
                        __typename: 'rekapKegiatan',
                        program,
                        kegiatan,
                        pekerjaan,
                        desa,
                        kecamatan,
                        nomor_kontrak,
                        nilai_kontrak,
                        nama_rekanan,
                        tgl_mulai,
                        tgl_selesai,   
                                },
                            },
            })
window.location.replace("http://localhost:8080/2020/rekapkegiatan");
        },
    },

    components: {
        FormWizard,
        TabContent
    }
}
</script>
        

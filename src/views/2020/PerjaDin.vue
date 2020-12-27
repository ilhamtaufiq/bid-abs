<template lang="html">
  <div>
    <vs-tabs :color="colorx">
      <vs-tab @click="colorx = 'success'" label="Success">
        <div class="con-tab-ejemplo">
<vs-table
      :sst="true"
      @search="handleSearch"
      @change-page="handleChangePage"
      @sort="handleSort"
      v-model="selected"
      pagination
      max-items="5"
      search
      :data="rekapkontrak">
      <template>
      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">
        <div class="flex flex-wrap-reverse items-center">
          <!-- Tambah Baru -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="$router.push('/2020/datakontrak')">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Add New</span>
          </div>
        </div>    
      </div>
        </template>
        <template slot="thead">
            <vs-th sort-key="desa">Desa</vs-th>
            <vs-th sort-key="kecamatan">Kecamatan</vs-th>
            <vs-th sort-key="pekerjaan">Pekerjaan</vs-th>
        </template>

        <template slot-scope="{data}">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
              <vs-td :data="data[indextr].id">
                {{data[indextr].desa}}
              </vs-td>

              <vs-td :data="data[indextr].id">
                {{data[indextr].kecamatan}}
              </vs-td>

              <vs-td :data="data[indextr].id">
                {{data[indextr].pekerjaan}}
              </vs-td>
          <template class="expand-user" slot="expand">
            <div class="con-expand-users w-full">
              <div class="con-btns-user flex items-center justify-between">
                <div class="con-userx flex items-center justify-start">
                  <span>{{ tr.nama_rekanan }}</span>
                </div>
                <div class="flex">
                  <vs-button type="border" size="small" icon-pack="feather" icon="icon-edit" color="success" class="mr-2"></vs-button>
                  <vs-button type="border" size="small" icon-pack="feather" @click="deleteKontrak(tr)" icon="icon-trash" color="danger"></vs-button>
                </div>
              </div>
              <vs-list>
                <vs-list-item icon-pack="feather" icon="icon-calendar" title="Mulai">{{tr.tgl_mulai}}</vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-calendar" title="Selesai">{{tr.tgl_selesai}}</vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-file-text" title="Nomor Kontrak">{{tr.nomor_kontrak}}</vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-file-text" title="Nilai Konrak">Rp.{{tr.nilai_kontrak}}</vs-list-item>
              </vs-list>
            </div>
          </template>

            </vs-tr>
          </template>

    </vs-table>
    </div> 
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import {getKontrak, deleteRekapKegiatan} from '@/graphql/getDataKontrak.gql'

export default {
  data:()=>({
    rekapkontrak:[],  
    colorx:'success'
  }),
      apollo:{
    rekapkontrak:{
      query: getKontrak,
      variables () {
        // don't do stupid thing, please.
    
      },
      update ({rekapKegiatans}) {
        return rekapKegiatans
      },
    }
  },
}
</script>

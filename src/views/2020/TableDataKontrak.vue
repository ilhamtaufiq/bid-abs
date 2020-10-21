<template>
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
                  <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" color="danger"></vs-button>
                </div>
              </div>
              <vs-list>
                <vs-list-item icon-pack="feather" icon="icon-calendar" :title="tr.tgl_mulai">Mulai</vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-calendar" :title="tr.tgl_selesai">Selesai</vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-file-text" :title="tr.nomor_kontrak">Nomor Kontrak</vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-file-text" :title="tr.nilai_kontrak">Nilai Kontrak</vs-list-item>
              </vs-list>
            </div>
          </template>

            </vs-tr>
          </template>

    </vs-table>
</template>



<script>
import getKontrak from '@/graphql/getDataKontrak.gql'

export default {
  data() {
    return {
        rekapkontrak:[],
        selected:[]
    }
  },
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
    methods:{
    handleSearch(searching) {
      let _print = `The user searched for: ${searching}\n`
      this.$refs.pre.appendChild(document.createTextNode(_print))
    },
    handleChangePage(page) {
      let _print = `The user changed the page to: ${page}\n`
      this.$refs.pre.appendChild(document.createTextNode(_print))
    },
    handleSort(key, active) {
      let _print = `the user ordered: ${key} ${active}\n`
      this.$refs.pre.appendChild(document.createTextNode(_print))
    }
  }

}
</script>

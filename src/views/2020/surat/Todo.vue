<template lang="html">
<vx-card>
  <div id="data-list-list-view" class="data-list-container">
      <tambah-surat-masuk :isSidebarActive="TambahSuratMasuk" @closeSidebar="TambahSuratMasuk = false" />
    <vs-table
      multiple
      v-model="selected"
      pagination
      max-items="10"
      search
      :data="rekapsurat"
      >
     <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">
       <div class="flex flex-wrap-reverse items-center">
          <!-- Tambah Baru -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="TambahSuratMasuk = true">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Tambah Baru</span>
          </div>
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="activePrompt2 = true" >
              <feather-icon icon="SaveIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Download Data</span>
                <vs-prompt
                @vs-accept="exportToExcel"
                :vs-active.sync="activePrompt2">
                <div class="con-exemple-prompt">
                  Masukkan Nama dan Format File yang Diinginkan
                  <vs-input  v-model="fileName" placeholder="Nama File.." class="w-full" />
              <vs-select
                label="Format"
                v-model="selectedFormat"
                >
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in formats" />
              </vs-select>
                </div>
              </vs-prompt>
          </div>
        </div> 
      </div>
      <template slot="thead">
        <vs-th sort-key="asal_surat">
          Asal Surat
        </vs-th>
        <vs-th sort-key="perihal_surat">
          Perihal Surat
        </vs-th>
        <vs-th sort-key="nomor_surat">
          Nomor Surat
        </vs-th>
        <vs-th sort-key="tgl_surat">
          Tanggal Surat
        </vs-th>
        <vs-th>
          Opsi
          </vs-th>
     </template>
      <template data="dataTable" slot-scope="{data}">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].id">
            <span>{{tr.asal_surat}}</span>
            <template slot="edit">
              <h5>Ubah: </h5>
              <vs-input v-on:keyup.enter="editAsalSurat(tr)" :text="rekapsurat.asal_surat" v-model="rekapsurat.asal_surat" ref="input" class="inputx"/>
            </template>
          </vs-td>
          <vs-td :data="data[indextr].id">
            <span>{{tr.perihal_surat}}</span>
          </vs-td>
          <vs-td :data="data[indextr].id">
            <span vs-align="center">{{tr.nomor_surat}}</span>
          </vs-td>
        <vs-td :data="data[indextr].id">
            <span vs-align="center">{{tr.tgl_surat}}</span>
          </vs-td>
          <vs-td>
          <vs-button type="border" size="small" icon-pack="feather" @click="deleteSurat(tr)" icon="icon-delete" color="danger" class="mr-2"></vs-button>
          </vs-td> 
        </vs-tr>
      </template> 
    </vs-table>
    </div>
</vx-card>
</template>
<script>
import TambahSuratMasuk from './TambahSuratMasuk.vue'
import {SuratMasuk, deleteSurat, updateSurat} from '@/graphql/SuratMasuk.gql'
import vSelect from 'vue-select'
import VxCard from '@/components/vx-card/VxCard.vue'
import VxTooltip from '@/layouts/components/vx-tooltip/VxTooltip.vue'



export default {
  components: { VxCard, VxTooltip },
  data() {
    return {
      TambahSuratMasuk: false,
      fileName: "",
      formats:[
        {text:"xlsx", value:"xlsx"}, 
        {text:"csv", value:"csv"}, 
        {text:"txt", value:"txt"}
        ],
      cellAutoWidth: true,
      selectedFormat: "xlsx",
      activePrompt2:false,
      val:'',
      valMultipe:{
        value1:'',
        value2:''
      },
        rekapsurat:[],
        selected:[],
        headerVal: ["asal_surat", "perihal_surat", "tgl_surat", "tgl_masuk"],

    }
  },
    apollo:{
    rekapsurat:{
      query: SuratMasuk,
      variables () {
        // don't do stupid thing, please.
    
      },
      update ({suratMasuks}) {
        return suratMasuks
      },
    }
  },
    computed:{
    validName(){
      return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)
    }
  },
    methods:{
    exportToExcel() {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Asal Surat', 'Perihal Surat', 'Tanggal Surat', 'Tanggal Masuk']
        const list = this.SuratMasuk
        const data = this.formatJson(this.headerVal, list)
        excel.export_json_to_excel({
          header: tHeader, //Header Required
          data, //Specific data Required
          filename: this.fileName,
          autoWidth: true, //Optional
          bookType: this.selectedFormat
        })
      })
        this.$vs.notify({
        color:'success',
        title:'Unduh Data',
        text:'Data Telah Berhasil Diunduh'
      })
    },
        formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        // Add col name which needs to be translated
        // if (j === 'timestamp') {
        //   return parseTime(v[j])
        // } else {
        //   return v[j]
        // }

        return v[j]
      }))
    },
    editAsalSurat(tr) {
      	const input = this.$refs.input.$el
      	this.$apollo.mutate({
				mutation: updateSurat,
				variables: {
        id: tr.id,
        asal_surat: this.rekapsurat.asal_surat,
				},
				optimisticResponse: {
					__typename: 'Mutation',
					updateMaps: {
            __typename: 'suratmasuks',
            id: tr.id,
            asal_surat: this.rekapsurat.asal_surat,
					},
				},
			})
    },
    deleteSurat(tr) {
      this.selected
			this.$apollo.mutate({
				mutation: deleteSurat,
				variables: {
					id: tr.id
        },
        update: (store) => {
					const queries = [
						{ query: SuratMasuk },
						{ query: SuratMasuk, variables: {  } },
					]
					const data = queries.map(query => store.readQuery(query))
					data.forEach(({ suratMasuks: list }) => {
						const index = list.findIndex(o => o.id === tr.id)
						if (index !== -1) {
							list.splice(index, 1)
						}
					})
					queries.forEach((query, index) => {
						store.writeQuery({
							...query,
							data: data[index],
						})
					})
        },
      })
      location.reload()
    },
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
    },
      acceptAlert(){
      this.clearValMultiple();
      this.$vs.notify({
        color:'success',
        title:'Unduh Data',
        text:'Data Telah Berhasil Diunduh'
      })
    },
    close(){
      this.$vs.notify({
        color:'danger',
        title:'Closed',
        text:'You close a dialog!'
      })
    },
    clearValMultiple() {
      this.valMultipe.value1 = "";
      this.valMultipe.value2 = "";

    }
  },
  components:{
    TambahSuratMasuk
  },

}
</script>

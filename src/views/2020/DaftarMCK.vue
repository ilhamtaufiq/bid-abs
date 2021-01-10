<template lang="html">
<vx-card>
  <div id="data-list-list-view" class="data-list-container">
    <vs-table
      multiple
      v-model="selected"
      pagination
      max-items="10"
      search
      :data="dataAirMinum"
      >
     <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">
       <div class="flex flex-wrap-reverse items-center">
          <!-- Tambah Baru -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="$router.push('/2020/tambahairminum')">
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
        <vs-th sort-key="nama_pekerjaan">
          Pekerjaan
        </vs-th>
        <vs-th sort-key="jumlah_sr">
          Jumlah SR
        </vs-th>
        <vs-th sort-key="panjang_pipa">
          Panjang Pipa
        </vs-th>
        <vs-th sort-key="penduduk_terlayani">
          Penduduk Terlayani
        </vs-th>
        <vs-th>
          Opsi
          </vs-th>
     </template>
      <template data="dataTable" slot-scope="{data}">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].id">
            <span>{{tr.nama_pekerjaan}}</span>
          </vs-td>
          <vs-td :data="data[indextr].id">
            <span>{{tr.jumlah_sr}}</span>
          </vs-td>
          <vs-td :data="data[indextr].id">
            <span vs-align="center">{{tr.panjang_pipa}}</span>
          </vs-td>
        <vs-td :data="data[indextr].id">
            <span vs-align="center">{{tr.penduduk_terlayani}}</span>
          </vs-td>
          <vs-td>
                              <vs-button type="border" size="small" icon-pack="feather" @click="delAirMinum(tr)" icon="icon-delete" color="success" class="mr-2"></vs-button>
                                                          <vs-button type="border" size="small" icon-pack="feather" @click="$router.push(`/2020/tambahairminum/?edit=${tr.id}`)" icon="icon-edit" color="success" class="mr-2"></vs-button>



            
          </vs-td> 
        </vs-tr>
      </template> 
    </vs-table>
    {{selected}}
    </div>
</vx-card>
</template>


<script>
import {getAirMinum, deleteAirMinum} from '@/graphql/AirMinum.gql'

export default {
  data() {
    return {
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
          selected:[],
          headerVal: ["nama_pekerjaan", "jumlah_sr", "panjang_pipa", "penduduk_terlayani"],

    }
  },
    apollo:{
    dataAirMinum:{
      query: getAirMinum,
      variables () {
        // don't do stupid thing, please.
    
      },
      update ({airMinums}) {
        return airMinums
      },
    }
  },
    methods:{
    exportToExcel() {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Pekerjaan', 'Jumlah SR', 'Panjang Pipa', 'Penduduk Terlayani']
        const list = this.dataAirMinum
        const data = this.formatJson(this.headerVal, list)
        excel.export_json_to_excel({
          header: tHeader, //Header Required
          data, //Specific data Required
          filename: this.fileName,
          autoWidth: true, //Optional
          bookType: this.selectedFormat
        })
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
    delAirMinum(tr) {
      this.selected
			this.$apollo.mutate({
				mutation: deleteAirMinum,
				variables: {
					id: tr.id
        },
        update: (store) => {
					const queries = [
						{ query: getAirMinum },
						{ query: getAirMinum, variables: {  } },
					]
					const data = queries.map(query => store.readQuery(query))
					data.forEach(({ airMinums: list }) => {
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
    }

}
</script>

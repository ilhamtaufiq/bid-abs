<template>
	<!-- <div>  
  <ul>
    <li v-for="koordinat in koordinats" v-bind:key="koordinat.id">
      <div>
        {{ koordinat.lat }}
      </div>
      <button @click="delMaps(koordinat)">delete</button>
    </li>
  </ul>
  </div>
  -->
<div id="data-list-list-view" class="data-list-container">
    <add-new-data-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="addNewDataSidebar = false" />
    <vs-table
      multiple
      v-model="selected"
      pagination
      max-items="10"
      search
      :data="koordinats"
      >
     <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">
       <div class="flex flex-wrap-reverse items-center">
          <!-- ACTION - DROPDOWN 
          <vs-dropdown vs-trigger-click class="cursor-pointer mr-4 mb-4">
            <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32">
              <span class="mr-2">Actions</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <vs-dropdown-menu>
              <vs-dropdown-item>
                <vs-button @click="delMaps(tr)">Delete</vs-button>
              </vs-dropdown-item>
              <vs-dropdown-item>
                <span>Archive</span>
              </vs-dropdown-item>
              <vs-dropdown-item>
                <span>Print</span>
              </vs-dropdown-item>
              <vs-dropdown-item>
                <span>Another Action</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
          -->
          <!-- Tambah Baru -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewDataSidebar = true">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Add New</span>
          </div>
        </div>    
      </div>
      <template slot="thead" >
        <vs-th>
          Desa 
        </vs-th>
        <vs-th>
          Kecamatan
        </vs-th>
        <vs-th>
          Nomor Kontrak
        </vs-th>
        <vs-th sort-key="lat">
          Latitude
        </vs-th>
        <vs-th sort-key="long_">
          Longtitude
        </vs-th>
        <vs-th>
          Opsi
          </vs-th>
     </template>
      <template data="dataTable" slot-scope="{data}">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          <vs-td></vs-td>
          <vs-td></vs-td>
          <vs-td></vs-td>
          <vs-td :data="data[indextr].lat">
            <vx-tooltip text="Klik untuk mengubah data" position="left">
            <span>{{tr.lat}}</span>
            </vx-tooltip>
          <template slot="edit">
              <h5>Ubah Latitude </h5>
              <vs-input v-on:keyup.enter="editMapsLat(tr)" v-model.number="lat" ref="input"  class="inputx" type="number"/>
          </template>
          </vs-td>
          <vs-td :data="data[indextr].long_">
            <vx-tooltip text="Klik untuk mengubah data" position="left">
            <span vs-align="center">{{tr.long_}}</span>
            </vx-tooltip>
          <template slot="edit">
              <h5>Ubah Longtitude </h5>
              <vs-input v-on:keyup.enter="editMapsLong(tr)" v-model.number="long_" ref="input" class="inputx" type="number"/>
          </template>
          </vs-td>
          <vs-td>
            <vs-button @click="delMaps(tr)"color="primary" icon="delete"></vs-button>
          </vs-td> 
        </vs-tr>
      </template> 
    </vs-table>
    {{selected}}
    </div>
</template>

<script>
import addNewDataSidebar from './TambahDataKegiatan'
import {getMaps, createMaps, deleteMaps, updateMaps} from "@/graphql/mapsAll.gql"


export default {
  components:{
    addNewDataSidebar
  },
  data () {
    return {
      selected:[],
      koordinats:[],
      addNewDataSidebar: false,
      lat: null,
      long_: null
    }
  },

  apollo:{
    koordinats:{
      query: getMaps,
      variables () {
        // don't mess up, please.
      },
      update ({maps}) {
        return maps
      },
    }
  },

  methods:{
    editMapsLat(tr) {
      	const input = this.$refs.input.$el
      	this.$apollo.mutate({
				mutation: updateMaps,
				variables: {
        id: tr.id,
        lat: this.lat,
				},
				optimisticResponse: {
					__typename: 'Mutation',
					updateMaps: {
            __typename: 'Maps',
            id: tr.id,
            lat: this.lat,
					},
				},
			})
    },
        editMapsLong(tr) {
      	const input = this.$refs.input.$el
      	this.$apollo.mutate({
				mutation: updateMaps,
				variables: {
        id: tr.id,
        long_: this.long_,
				},
				optimisticResponse: {
					__typename: 'Mutation',
					updateMaps: {
            __typename: 'Maps',
            id: tr.id,
            long_: this.long_,
					},
				},
			})
    },
		delMaps(tr) {
			this.$apollo.mutate({
				mutation: deleteMaps,
				variables: {
					id: tr.id
        },
        update: (store) => {
					const queries = [
						{ query: getMaps },
						{ query: getMaps, variables: {  } },
					]
					const data = queries.map(query => store.readQuery(query))
					data.forEach(({ maps: list }) => {
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
    },
  }
}
</script>
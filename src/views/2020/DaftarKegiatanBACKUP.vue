<template lang="html">
  <div id="data-list-list-view" class="data-list-container">
    <add-new-data-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="addNewDataSidebar = false" />
    <vs-table
      multiple
      v-model="selected"
      pagination
      max-items="10"
      search
      :data="maps"
      >
     <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">
       <div class="flex flex-wrap-reverse items-center">
          <!-- ACTION - DROPDOWN -->
          <vs-dropdown vs-trigger-click class="cursor-pointer mr-4 mb-4">
            <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32">
              <span class="mr-2">Actions</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <vs-dropdown-menu>
              <vs-dropdown-item>
                <vs-button @click="deleteMap(data.id)">Delete</vs-button>
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
          <!-- Tambah Baru -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewDataSidebar = true">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Add New</span>
          </div>
        </div>    
      </div>
      <template slot="thead">
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
          <vs-td :data="data[indextr].lat">
            {{tr.lat}}
          </vs-td>
          <vs-td :data="data[indextr].long_">
            {{tr.long_}}
          </vs-td>
          <vs-td>
            <vs-button @click="deleteMap(tr.id)" :value="data[indextr].id" color="primary" icon="delete"></vs-button>
          </vs-td> 
        </vs-tr>
      </template> 
    </vs-table>
    {{selected}}
    </div>
</template>

<script>
import AddNewDataSidebar from './TambahDataKegiatan.vue'
import gql from "graphql-tag"
import getMaps from '@/graphql/mapsAll.gql'
import delMaps from '@/graphql/mapsDelete.gql'


export default {
  components: {
    AddNewDataSidebar
  },
  data:()=>({
    selected:[], //selected id
    addNewDataSidebar: false,
    maps:[],
  }),
  
  apollo: {
		maps: {
			query: getMaps,
			variables () {
				return {
				}
			},
			update ({ maps }) {
				// The field is different from 'tasks'
				return maps
			},
		},
	},
  
  methods: {
      deleteMap(id){
         this.$apollo.mutate({
				  variables: {
            id
          },
				  update: (store) => {
					  const queries = [
						  { query: getMaps },
						  { query: getMaps, variables: { id: this.maps.id, lat: this.maps.lat, long_: this.maps.long_ } },
					  ]
					  const data = queries.map(query => store.readQuery(query))
					  data.forEach(({ maps: list }) => {
						  const index = list.findIndex(o => o.id === this.maps.id)
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

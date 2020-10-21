<template lang="html">
  <div id="data-list-list-view" class="data-list-container">
    <add-new-data-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="addNewDataSidebar = false" />
    <vs-table
      multiple
      v-model="selected"
      pagination
      max-items="10"
      search
      :data="maps">
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
                <vs-button @click="del">Delete</vs-button>
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

          <!-- ADD NEW -->
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
     </template>
      <template slot-scope="{data}">
        <vs-tr :data="map" :key="id" v-for="(map, id) in data" >
          <vs-td :data="data[id].lat">
              {{data[id].lat}}
            <template slot="edit">
              <div>
              <vs-input-number v-on:keyup.enter="updateMap" :value="data[id].lat" v-model="data[id].id"class="inputx"/>
              </div>
            </template>
          </vs-td>
          <vs-td :data="data[id].long_">
            {{data[id].long_}}
            <template slot="edit">
              <div>
              <vs-input-number v-on:keyup.enter="updateMap" :value="data[id].long_" v-model="data[id].id" class="inputx"/>
              </div>
            </template>
          </vs-td>
        </vs-tr>
      </template> 
    </vs-table>
    <span>{{selected}}</span>
  </div>
</template>

<script>
import AddNewDataSidebar from './TambahDataKegiatan.vue';
import axios from 'axios'
export default {
  components: {
    AddNewDataSidebar
  },
  data:()=>({
    selected:[],
    addNewDataSidebar: false,
    maps:{}
  }),
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:1337/maps').then(res => {
        this.maps = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },

    del() {       
    axios.delete('http://localhost:1337/maps', {maps: {id: id}}) 
    }



   }
  }

</script>

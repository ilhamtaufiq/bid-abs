<template lang="html">
  <div id="data-list-list-view" class="data-list-container">
    <tambah-data-koordinat :isSidebarActive="TambahDataKoordinat" @closeSidebar="TambahDataKoordinat = false" />
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
                <span @click="delMaps(tr)">Delete</span>
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
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="TambahDataKoordinat = true">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Tambah Baru</span>
          </div>
        </div>    
      </div>
      <template slot="thead">
        <vs-th sort-key="lat">
          Pekerjaan
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
    <vs-td :data="data[indextr].pekerjaan">
      <span>{{ tr.pekerjaan }}</span>
    </vs-td>
    <vs-td :data="data[indextr].lat">
      <vx-tooltip text="Klik untuk mengubah data" position="left">
        <span>{{ tr.lat }}</span>
      </vx-tooltip>
      <template slot="edit">
        <h5>Ubah Latitude</h5>
        <vs-input
          v-on:keyup.enter="editMapsLat(tr)"
          v-model.number="koordinats.lat"
          ref="input"
          class="inputx"
          type="number"
        />
      </template>
    </vs-td>
    <vs-td :data="data[indextr].long_">
      <vx-tooltip text="Klik untuk mengubah data" position="left">
        <span vs-align="center">{{ tr.long_ }}</span>
      </vx-tooltip>
      <template slot="edit">
        <h5>Ubah Longtitude</h5>
        <vs-input
          v-on:keyup.enter="editMapsLong(tr)"
          v-model.number="koordinats.long_"
          ref="input"
          class="inputx"
          type="number"
        />
      </template>
    </vs-td>
    <vs-td>
      <vs-button @click="delMaps(tr)" color="primary" icon="delete"></vs-button>
    </vs-td>
  </vs-tr>
</template> 
    </vs-table>
<l-map style="height: 350px" :zoom="zoom" :center="center">
<l-tile-layer :url="url"></l-tile-layer>
<l-marker :lat-lng="[47.313220, -1.319482]" ></l-marker>
</l-map>

  </div>

    </div>
</template>

<script>
import TambahDataKoordinat from "./TambahDataKoordinat.vue";
import {
  getMaps,
  createMaps,
  deleteMaps,
  updateMaps,
} from "@/graphql/mapsAll.gql";
import mapsAll from "@/graphql/mapsCreate.gql"
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import gql from "graphql-tag";


export default {
  data: () => ({
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    zoom: 3,
    center: [47.31322, -1.319482],
    markerLatLng: [47.31322, -1.319482],
    selected: [],
    koordinats:[],
    latlng:{
      latitude:null,
      longitude:null
    },
    TambahDataKoordinat: false,
  }),
  components: {
    TambahDataKoordinat,
    LMap,
    LTileLayer,
    LMarker,
  },

  apollo: {
    koordinats: {
      query: getMaps,
      variables() {
        // don't mess up, please.
      },
      update({ maps }) {
        return maps;
      },
    },
  },

  methods: {
        async mapsAll() {
      let { data } = await this.$apollo.query({
        query: mapsAll,
        variables: {
          lat: this.latlng.latitude,
          long_: this.latlng.longitude
        },
      });
      console.log("DATA", data);
        },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
    editMapsLat(tr) {
      const input = this.$refs.input.$el;
      this.$apollo.mutate({
        mutation: updateMaps,
        variables: {
          id: tr.id,
          lat: this.koordinats.lat,
        },
        optimisticResponse: {
          __typename: "Mutation",
          updateMaps: {
            __typename: "Maps",
            id: tr.id,
            lat: this.koordinats.lat,
          },
        },
      });
    },
    editMapsLong(tr) {
      const input = this.$refs.input.$el;
      this.$apollo.mutate({
        mutation: updateMaps,
        variables: {
          id: tr.id,
          long_: this.koordinats.long_,
        },
        optimisticResponse: {
          __typename: "Mutation",
          updateMaps: {
            __typename: "Maps",
            id: tr.id,
            long_: this.koordinats.long_,
          },
        },
      });
    },
    delMaps(tr) {
      this.selected;
      this.$apollo.mutate({
        mutation: deleteMaps,
        variables: {
          id: tr.id,
        },
        update: (store) => {
          const queries = [
            { query: getMaps },
            { query: getMaps, variables: {} },
          ];
          const data = queries.map((query) => store.readQuery(query));
          data.forEach(({ maps: list }) => {
            const index = list.findIndex((o) => o.id === tr.id);
            if (index !== -1) {
              list.splice(index, 1);
            }
          });
          queries.forEach((query, index) => {
            store.writeQuery({
              ...query,
              data: data[index],
            });
          });
        },
      });
    },
  },
};
</script>

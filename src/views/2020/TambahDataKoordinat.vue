<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>Tambah Data Kegiatan</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new pt-4 pb-6" :settings="settings">

      <div class="p-6">
        <!-- NAME -->
        <vs-input type="number" label="Latitude" name="lat" v-model.number="lat" class="mt-5 w-full" />
        <vs-input type="number" label="Longtitude" name="long_" v-model.number="long_" class="mt-5 w-full" />

      </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap items-center justify-center p-6" slot="footer">
      <vs-button @click.native="createMap(lat, long_)" class="mr-6">Tambah</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancel</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import addMaps from "@/graphql/mapsCreate.gql"
import {updateMaps, getMaps} from "@/graphql/mapsAll.gql"
import gql from "graphql-tag";


export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    }
  },
  name: 'mapsCreate',
  data() {
    return {
      lat: null,
      long_: null,
      settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if(!val) {
          this.$emit('closeSidebar');
          this.initValues();
        }
      }
    }
  },
  methods: {
    initValues() {
    },
    createMap(){
      const lat = this.lat;
      const long_ = this.long_;
      this.$apollo.mutate({
          mutation: addMaps,
          variables:{
            lat: lat,
            long_: long_
          },
          update: (store, { data: { createMap } }) => {
							// Add to All tasks list
							const data = store.readQuery({ query: getMaps })
							data.maps.push(createMap)
							store.writeQuery({ query: getMaps, data })

							// Add to Todo tasks list
							const mapQuery = {
								query: getMaps,
								variables: {  },
							}
							const mapData = store.readQuery(mapQuery)
							mapData.maps.push(createMap)
							store.writeQuery({ ...mapQuery, data: mapData })
						},
						optimisticResponse: {
							__typename: 'Mutation',
							createMap: {
								__typename: 'Maps',
								id: null,
								lat,
								long_,
							},
						},
        })
      location.reload();
    },


  },
  components: {
    VuePerfectScrollbar,
  }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  /deep/ .vs-sidebar--background {
    z-index: 52010;
  }

  /deep/ .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
    height: calc(100% - 4.3rem);
}
</style>

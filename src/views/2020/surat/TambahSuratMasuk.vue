<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>Tambah Surat Masuk</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>
      <div class="p-6">
        <!-- NAME -->
        <vs-input label="Nomor Surat" name="nomor_surat" v-model="SuratMasuk.nomor_surat" class="mt-5 w-full" />
        <vs-input label="Asal Surat" name="asal_surat" v-model="SuratMasuk.asal_surat" class="mt-5 w-full" />
        <vs-input label="Perihal Surat" name="perihal_surat" v-model="SuratMasuk.perihal_surat" class="mt-5 w-full" />
        <vs-input type="date" label="Tanggal Surat" name="tgl_surat" v-model.date="SuratMasuk.tgl_surat" class="mt-5 w-full" />
        <vs-input type="date" label="Tanggal Masuk" name="tgl_surat" v-model.date="SuratMasuk.tgl_masuk" class="mt-5 w-full" />
      </div>

    <div class="flex flex-wrap items-center justify-center p-6" slot="footer">
      <vs-button @click.native="TambahSuratMasuk" class="mr-6">Tambah</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancel</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import {addSuratMasuk,SuratMasuk,updateSurat} from "@/graphql/SuratMasuk.gql"
import gql from "graphql-tag";


export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    }
  },
  name: 'mapsCreate',
  data:() => ({
    SuratMasuk:{
      nomor_surat: '',
      asal_surat: '',
      perihal_surat: '',
      tgl_surat: '',
      tgl_masuk: ''
    }
  }),
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
    apollo:{
    datakontrak:{
      query: SuratMasuk,
      variables () {
        // don't do stupid thing, please.
    
      },
      update ({suratMasuks}) {
        return suratMasuks
      },
    }
  },
  methods: {
        async TambahSuratMasuk(){
            let {data} = await this.$apollo.mutate({
                mutation: addSuratMasuk,
                variables: this.SuratMasuk,
                optimisticResponse: {
                      __typename: 'Mutation',
                      createRekapKegiatan: {
                        __typename: 'suratMasuks',
                        nomor_surat: this.SuratMasuk.nomor_surat,
                        asal_surat: this.SuratMasuk.asal_surat,
                        perihal_surat: this.SuratMasuk.perihal_surat,
                        tgl_surat: this.SuratMasuk.tgl_surat,
                        tgl_masuk: this.SuratMasuk.tgl_masuk,
                        },
                },
            });
            location.reload() ;           
        },
    },
  components: {
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

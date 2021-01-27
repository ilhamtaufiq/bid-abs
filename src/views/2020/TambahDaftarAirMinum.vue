<template>
  <vx-card>
<h3>{{ editMode ? 'Edit Data SPAM' : 'Tambah Data SPAM' }}</h3>
    <div class="vx-row">
      <div class="vx-col sm:w-1/2 w-full mb-2">
        <!-- <vs-input  class="w-full" label-placeholder="Pekerjaan" v-model="dataAirMinum.nama_pekerjaan" /> -->
        <vs-select
          autocomplete
          v-model.text="dataAirMinum.nama_pekerjaan"
          class="w-full select-large"
          label="Pekerjaan"
          placeholder="Pilih Pekerjaan"
        >
          <vs-select-item
            :v-model.text="dataAirMinum.nama_pekerjaan"
            :name="dataAirMinum.nama_pekerjaan"
            :key="index"
            :value="item.pekerjaan"
            :text="item.pekerjaan"
            v-for="(item, index) in datakontrak"
            class="w-full"
          />
        </vs-select>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col sm:w-1/2 w-full mb-2">
        <vs-input
          type="number"
          class="w-full"
          label-placeholder="Jumlah SR"
          v-model.number="dataAirMinum.jumlah_sr"
        />
      </div>
      <div class="vx-col sm:w-1/2 w-full mb-2">
        <vs-input
          type="number"
          class="w-full"
          label-placeholder="Panjang Pipa"
          v-model.number="dataAirMinum.panjang_pipa"
        />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col sm:w-1/2 w-full mb-2">
        <vs-input
          type="number"
          class="w-full"
          label-placeholder="Penduduk Terlayani"
          v-model.number="dataAirMinum.penduduk_terlayani"
        />
      </div>
      <div class="vx-col sm:w-1/2 w-full mb-6">
        <vs-input
          class="w-full"
          label-placeholder="Nama Pengelola"
          v-model="dataAirMinum.nama_pengelola"
        />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <vs-button v-if="!editMode" class="mr-3 mb-2" @click="addAirMinum"
          >Tambah</vs-button
        >
        <vs-button v-else class="mr-3 mb-2" @click="updateSPAM">Ubah</vs-button>
      </div>
    </div>
  </vx-card>
</template>

<script>
import { addSPAM, getSPAM, updateSPAM } from "@/graphql/getAirMinum.gql";
import { getAirMinum, addAirMinum } from "@/graphql/AirMinum.gql";
import VxCard from "../../components/vx-card/VxCard.vue";
import gql from "graphql-tag";

export default {
  data: () => ({
    datakontrak: [],
    dataAirMinum: {
      nama_pekerjaan: "",
      jumlah_sr: null,
      panjang_pipa: null,
      penduduk_terlayani: null,
      nama_penegelola: "",
    },
  }),

  computed: {
    editMode() {
      return !!this.$route.query.edit;
    },
  },
  apollo: {
    datakontrak: {
      query: getAirMinum,
      variables() {
        // don't do stupid thing, please.
      },
      update({ rekapKegiatans }) {
        return rekapKegiatans;
      },
    },
  },

  methods: {
    async addAirMinum() {
      let { data } = await this.$apollo.mutate({
        mutation: addAirMinum,
        variables: this.dataAirMinum,
        optimisticResponse: {
          __typename: "Mutation",
          createRekapKegiatan: {
            __typename: "airMinum",
            nama_pekerjaan: this.dataAirMinum.nama_pekerjaan,
            jumlah_sr: this.dataAirMinum.jumlah_sr,
            panjang_pipa: this.dataAirMinum.panjang_pipa,
            penduduk_terlayani: this.dataAirMinum.penduduk_terlayani,
            nama_penegelola: this.dataAirMinum.nama_penegelola,
          },
        },
      });
      console.log("DATA", data);
      window.location.replace("/2021/airminum");
    },
    async getSPAM() {
      let { data } = await this.$apollo.query({
        query: getSPAM,
        variables: {
          id: this.$route.query.edit,
        },
      });
      console.log("DATA", data);
      this.dataAirMinum = data.airMinum;
    },
    async updateSPAM() {
      let { data } = await this.$apollo.mutate({
        mutation: updateSPAM,
        variables: {
          ...this.dataAirMinum,
          id: this.$route.query.edit,
        },
      });
      window.location.replace("/2021/airminum");
    },
  },
  created() {
    if (this.editMode) {
      this.getSPAM();
    }
  },

  components: {
    VxCard,
  },
};
</script>
        

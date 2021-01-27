<template>
  <div id="app">
    <vx-card>
      <vs-table
        :sst="true"
        @search="handleSearch"
        @change-page="handleChangePage"
        @sort="handleSort"
        v-model="selected"
        pagination
        max-items="5"
        search
        :data="rekapkontrak"
      >
        <template>
          <div
            slot="header"
            class="flex flex-wrap-reverse items-center flex-grow justify-between"
          >
            <div class="flex flex-wrap-reverse items-center">
              <!-- Tambah Baru -->
              <div
                class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary"
                @click="$router.push('/2021/datakontrak')"
              >
                <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
                <span class="ml-2 text-base text-primary">Tambah</span>
              </div>
              <div
                class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary"
                @click="activePrompt2 = true"
              >
                <feather-icon icon="SaveIcon" svgClasses="h-4 w-4" />
                <span class="ml-2 text-base text-primary">Download Data</span>
                <vs-prompt
                  @vs-accept="exportToExcel"
                  :vs-active.sync="activePrompt2"
                >
                  <div class="con-exemple-prompt">
                    Masukkan Nama dan Format File yang Diinginkan
                    <vs-input
                      v-model="fileName"
                      name="nama_file"
                      placeholder="Nama File.."
                      class="w-full"
                    />
                    <vs-select label="Format" v-model="selectedFormat">
                      <vs-select-item
                        :key="index"
                        :value="item.value"
                        :text="item.text"
                        v-for="(item, index) in formats"
                      />
                    </vs-select>
                  </div>
                </vs-prompt>
              </div>
            </div>
          </div>
        </template>
        <template slot="thead">
          <vs-th sort-key="pekerjaan">Pekerjaan</vs-th>
          <vs-th sort-key="desa">Desa</vs-th>
          <vs-th sort-key="kecamatan">Kecamatan</vs-th>
        </template>

        <template slot-scope="{ data }">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].id">
              {{ data[indextr].pekerjaan }}
            </vs-td>
            <vs-td :data="data[indextr].id">
              {{ data[indextr].desa }}
            </vs-td>
            <vs-td :data="data[indextr].id">
              {{ data[indextr].kecamatan }}
            </vs-td>
            <template class="expand-user" slot="expand">
              <div class="con-expand-users w-full">
                <div class="con-btns-user flex items-center justify-between">
                  <div class="con-userx flex items-center justify-start">
                    <span>{{ tr.nama_rekanan }}</span>
                  </div>
                  <div class="flex">
                    <vx-tooltip text="Klik untuk mengubah data" position="left">
                      <vs-button
                        type="border"
                        size="small"
                        icon-pack="feather"
                        @click="
                          $router.push(`/2021/datakontrak/?edit=${tr.id}`)
                        "
                        icon="icon-edit"
                        color="success"
                        class="mr-2"
                      ></vs-button>
                    </vx-tooltip>
                    <vx-tooltip
                      text="Klik untuk menghapus data"
                      position="left"
                    >
                      <vs-button
                        type="border"
                        size="small"
                        icon-pack="feather"
                        @click="deleteKontrak(tr)"
                        icon="icon-trash"
                        color="danger"
                      ></vs-button>
                    </vx-tooltip>
                  </div>
                </div>
                <vs-list>
                  <vs-list-item
                    icon-pack="feather"
                    icon="icon-calendar"
                    title="Mulai"
                    >{{ tr.tgl_mulai }}</vs-list-item
                  >
                  <vs-list-item
                    icon-pack="feather"
                    icon="icon-calendar"
                    title="Selesai"
                    >{{ tr.tgl_selesai }}</vs-list-item
                  >
                  <vs-list-item
                    icon-pack="feather"
                    icon="icon-file-text"
                    title="Nomor Kontrak"
                    >{{ tr.nomor_kontrak }}</vs-list-item
                  >
                  <vs-list-item
                    icon-pack="feather"
                    icon="icon-file-text"
                    title="Nilai Konrak"
                    >{{ tr.nilai_kontrak }}</vs-list-item
                  >
                </vs-list>
              </div>
            </template>
          </vs-tr>
        </template>
      </vs-table>
    </vx-card>
  </div>
</template>



<script>
import { getKontrak, deleteRekapKegiatan } from "@/graphql/getDataKontrak.gql";
import vSelect from "vue-select";
import VxCard from "../../components/vx-card/VxCard.vue";
import { PlusIcon } from "vue-feather-icons";

export default {
  components: { VxCard, PlusIcon },
  data() {
    return {
      fileName: "",
      formats: [
        { text: "xlsx", value: "xlsx" },
        { text: "csv", value: "csv" },
        { text: "txt", value: "txt" },
      ],
      cellAutoWidth: true,
      selectedFormat: "xlsx",
      activePrompt2: false,
      val: "",
      valMultipe: {
        value1: "",
        value2: "",
      },
      rekapkontrak: [],
      selected: [],
      headerVal: [
        "id",
        "desa",
        "kecamatan",
        "pekerjaan",
        "tgl_mulai",
        "tgl_selesai",
        "nomor_kontrak",
        "nilai_kontrak",
      ],
    };
  },
  apollo: {
    rekapkontrak: {
      query: getKontrak,
      variables() {
        // don't do stupid thing, please.
      },
      update({ rekapKegiatans }) {
        return rekapKegiatans;
      },
    },
  },
  computed: {
    validName() {
      return (
        this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0
      );
    },
  },
  methods: {
    exportToExcel() {
      import("@/vendor/Export2Excel").then((excel) => {
        const tHeader = [
          "ID",
          "Desa",
          "Kecamatan",
          "Pekerjaan",
          "Mulai",
          "Selesai",
          "Nomor Kontrak",
          "Nilai kontrak",
        ];
        const list = this.rekapkontrak;
        const data = this.formatJson(this.headerVal, list);
        excel.export_json_to_excel({
          header: tHeader, //Header Required
          data, //Specific data Required
          filename: this.fileName,
          autoWidth: true, //Optional
          bookType: this.selectedFormat,
        });
      });
      this.$vs.notify({
        color: "success",
        title: "Unduh Data",
        text: "Data Telah Berhasil Diunduh",
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          // Add col name which needs to be translated
          // if (j === 'timestamp') {
          //   return parseTime(v[j])
          // } else {
          //   return v[j]
          // }

          return v[j];
        })
      );
    },
    deleteKontrak(tr) {
      this.selected;
      this.$apollo.mutate({
        mutation: deleteRekapKegiatan,
        variables: {
          id: tr.id,
        },
        update: (store) => {
          const queries = [
            { query: getKontrak },
            { query: getKontrak, variables: {} },
          ];
          const data = queries.map((query) => store.readQuery(query));
          data.forEach(({ rekapKegiatans: list }) => {
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
      location.reload();
    },
    handleSearch(searching) {
      let _print = `The user searched for: ${searching}\n`;
      this.$refs.pre.appendChild(document.createTextNode(_print));
    },
    handleChangePage(page) {
      let _print = `The user changed the page to: ${page}\n`;
      this.$refs.pre.appendChild(document.createTextNode(_print));
    },
    handleSort(key, active) {
      let _print = `the user ordered: ${key} ${active}\n`;
      this.$refs.pre.appendChild(document.createTextNode(_print));
    },
    acceptAlert() {
      this.clearValMultiple();
      this.$vs.notify({
        color: "success",
        title: "Unduh Data",
        text: "Data Telah Berhasil Diunduh",
      });
    },
    close() {
      this.$vs.notify({
        color: "danger",
        title: "Closed",
        text: "You close a dialog!",
      });
    },
    clearValMultiple() {
      this.valMultipe.value1 = "";
      this.valMultipe.value2 = "";
    },
  },
};
</script>

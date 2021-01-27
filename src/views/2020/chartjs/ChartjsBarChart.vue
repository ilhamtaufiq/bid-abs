<template>
  <vx-card title="Sambungan Rumah Terbangun" class="mb-base" code-toggler>
    <div class="mt-5">
      <chartjs-component-bar-chart
        :height="250"
        :data="chartData"
        :options="options"
      ></chartjs-component-bar-chart>
    </div>

    <template slot="codeContainer"> </template>
  </vx-card>
</template>

<script>
import ChartjsComponentBarChart from "./ChartjsComponentBarChart.vue";
import { getAirMinum, deleteAirMinum } from "@/graphql/AirMinum.gql";
import {createRekapKegiatan, updateKontrak, dataKontrak} from '@/graphql/dataKontrak.gql'
import graphql2chartjs from "graphql2chartjs";
import gql from "graphql-tag";
export default {
  data() {
    return {
      chartData: null,
      aa:[],
      bb:[],
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Pembangunan SPAM Perdesaan",
        },
      },
    };
  },
  apollo: {
    airMinums: {
      query: gql`
        query getAirMinum {
          airMinums {
            label: nama_pengelola
            data: jumlah_sr
          }
        }
      `,
      result({ data }) {
        const g2c = new graphql2chartjs();
        g2c.add(data, "bar");
        this.chartData = g2c.data;
        this.loaded = true;
        //console.log("DATA", g2c.data);
      },
    },
  },

  components: {
    ChartjsComponentBarChart,
  }
};
</script>
<template>
    <vx-card title="Kabupaten Cianjur" class="mb-base" code-toggler>

        <div class="mt-5">
          <line-chart v-if="loaded" :chartData="chartData" :options="options" :width="200" :height="300"/>
        </div>

        <template slot="codeContainer">
        </template>
    </vx-card>
</template>

<script>
import ChartjsComponentLineChart from "./ChartjsComponentLineChart.vue";
import {getAirMinum, deleteAirMinum} from "@/graphql/AirMinum.gql"
import graphql2chartjs from "graphql2chartjs"
import gql from "graphql-tag"


export default {
  data:() => ({
      loaded: false,
      loading: false,
            chartData: null,
            options: {
                gridLines: {
                    display: true,
                    drawBorder: true,
                },
                title: {
                    display: true,
                    text: 'Jumlah Sambungan Rumah SPAM Perdesaan',
                }
            }
    }),
    apollo: {
    airMinums: {
      query: gql`query getAirMinum {
        airMinums {
            label: nama_pekerjaan,
            data: jumlah_sr,
            backgroundColor: color

        }
      }`,
        result({ data }) {
          const g2c = new graphql2chartjs();
          g2c.add(data, "bar");
          this.chartData = g2c.data;
          this.loaded = true;
          console.log("DATA", g2c.data)
        }

        }
    },
  
    components: {
        ChartjsComponentLineChart
    }
}
</script>
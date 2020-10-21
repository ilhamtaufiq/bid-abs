<template>
    <vx-card title="Kabupaten Cianjur" class="mb-base" code-toggler>

        <div class="mt-5">
            <chartjs-component-line-chart :height=250 :data="data" :options="options"></chartjs-component-line-chart>
        </div>

        <template slot="codeContainer">
        </template>
    </vx-card>
</template>

<script>
import ChartjsComponentLineChart from "./ChartjsComponentLineChart.vue"
export default {
    data() {
        return {
            data: {
                labels: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
                datasets: [{
                    data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                    label: "Agrabinta",
                    borderColor: "#7367F0",
                    fill: false
                }, {
                    data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                    label: "Bojongpicung",
                    borderColor: "#28C76F",
                    fill: false
                }, {
                    data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                    label: "Sukaresmi",
                    borderColor: "#28C76F",
                    fill: false
                },{
                    data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                    label: "Naringgul",
                    borderColor: "#EA5455",
                    fill: false
                }, {
                    data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                    label: "Campaka",
                    borderColor: "#FF9F43",
                    fill: false
                }, {
                  data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                    label: "Sukaresmi",
                    borderColor: "#FF9F43",
                    fill: false
                }, {
                  data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                    label: "Pacet",
                    borderColor: "#FF9F43",
                    fill: false
                },{
                    data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                    label: "Cipanas",
                    borderColor: "#1E1E1E",
                    fill: false
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Jumlah Sambungan Rumah SPAM Perdesaan'
                }
            }
        }
    },
    components: {
        ChartjsComponentLineChart
    }
}
</script>
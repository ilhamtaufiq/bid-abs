<template>
    <div id="extra-component-chartjs-demo">
            <h1 class="judul">Bidang Air Bersih dan Sanitasi Dalam Data</h1> 
            </br>   
        <div class="vx-row">
            <div class="vx-col w-full">
                <chartjs-line-chart></chartjs-line-chart>
            </div>
            <!-- Chart Lainnya
            <div class="vx-col w-full md:w-1/2">
                <chartjs-bar-chart></chartjs-bar-chart>                 
            </div>
            <div class="vx-col w-full md:w-1/2">
                <chartjs-horizontal-bar-chart></chartjs-horizontal-bar-chart>
            </div>
            <div class="vx-col w-full md:w-1/2">
                <chartjs-pie-chart></chartjs-pie-chart>
            </div>
            <div class="vx-col w-full md:w-1/2">
                <chartjs-doughnut-chart></chartjs-doughnut-chart>
            </div>
            <div class="vx-col w-full md:w-1/2">
                <chartjs-radar-chart></chartjs-radar-chart>
            </div>
            <div class="vx-col w-full md:w-1/2">
                <chartjs-polar-area-chart></chartjs-polar-area-chart>
            </div>
            <div class="vx-col w-full md:w-1/2">
                <chartjs-bubble-chart></chartjs-bubble-chart>
            </div>
            <div class="vx-col w-full">
                <chartjs-scatter-chart></chartjs-scatter-chart>
            </div>
            -->
        </div>
    </div>
</template>

<script>
import ChartjsBarChart from "@/views/2020/chartjs/ChartjsBarChart.vue"
import ChartjsLineChart from "@/views/2020/chartjs/ChartjsLineChart.vue"
import ChartjsPieChart from "@/views/2020/chartjs/ChartjsPieChart.vue"
import ChartjsRadarChart from "@/views/2020/chartjs/ChartjsRadarChart.vue"
import ChartjsPolarAreaChart from "@/views/2020/chartjs/ChartjsPolarAreaChart.vue"
import ChartjsDoughnutChart from "@/views/2020/chartjs/ChartjsDoughnutChart.vue"
import ChartjsHorizontalBarChart from "@/views/2020/chartjs/ChartjsHorizontalBarChart.vue"
import ChartjsBubbleChart from "@/views/2020/chartjs/ChartjsBubbleChart.vue"
import ChartjsScatterChart from "@/views/2020/chartjs/ChartjsScatterChart.vue"

export default {
    components: {
        ChartjsBarChart,
        ChartjsLineChart,
        ChartjsPieChart,
        ChartjsRadarChart,
        ChartjsPolarAreaChart,
        ChartjsDoughnutChart,
        ChartjsHorizontalBarChart,
        ChartjsScatterChart,
        ChartjsBubbleChart,
    }
}
</script>
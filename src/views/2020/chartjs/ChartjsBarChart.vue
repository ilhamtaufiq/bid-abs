<!-- =========================================================================================
    File Name: ChartBarChart.vue
    Description: Create bar chart
    ----------------------------------------------------------------------------------------
     
========================================================================================== -->


<template>
    <vx-card title="Bar Chart" class="mb-base" code-toggler>

        <div class="mt-5">
            <chartjs-component-bar-chart :height=250 :data="data" :options="options"></chartjs-component-bar-chart>
        </div>

        <template slot="codeContainer">
        </template>
    </vx-card>
</template>

<script>
import ChartjsComponentBarChart from "./ChartjsComponentBarChart.vue"
export default {
    data() {
        return {
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [{
                    label: "Population (millions)",
                    // backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    backgroundColor: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
                    data: [2478, 5267, 734, 784, 433]
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                }
            }
        }
    },
    components: {
        ChartjsComponentBarChart
    }
}
</script>
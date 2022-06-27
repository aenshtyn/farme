<template>
  <div style="height:400px;width: auto;display: flex;flex-direction:column;">
    <vue3-chart-js
        :id="doughnutChart.id"
        ref="chartRef"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
    ></vue3-chart-js>

 
  </div>
</template>

<script>
import { ref } from 'vue'
// import { Bar } from 'vue-chartjs'
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
  name: 'App',
  components: {
    Vue3ChartJs,
  },
  setup () {
    const chartRef = ref(null)

    const doughnutChart = {
      id: 'doughnut',
      type: 'line',
      data: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16'
            ],
            data: [40, 50, 100, 1]
          }
        ]
      }
    }


    return {
      doughnutChart,
      chartRef
    }
  },
}
</script>
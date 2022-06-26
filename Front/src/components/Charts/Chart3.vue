<template>
  <div class="lineChart">
    <div class="chartAndButtonsContainer">
      <div class="dateRangeButtons">
        <button
          class="btn btn-primary"
          @click="
            createMilkProductionChartInSpecifiedDateHistoryRangeSETUP(2630000)
          "
        >
          1 month
        </button>
        <button
          class="btn btn-primary"
          @click="
            createMilkProductionChartInSpecifiedDateHistoryRangeSETUP(31536000)
          "
        >
          1 year
        </button>
        <button
          class="btn btn-primary"
          @click="
            createMilkProductionChartInSpecifiedDateHistoryRangeSETUP(157680000)
          "
        >
          5 years
        </button>
      </div>

      <div id="chartContainer">
        <canvas id="myChart" width="400px" height="400px"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Chart from "chart.js/auto";
import axios from "axios";
let milkProductionHistory = [];
let milkProductionHistoryDates = [];
let myChart;
myChart;
export default {
  name: "LineChart",
  mounted() {
    // beginning of stock API code
    let cowName = "1";
    let FarmAPI_URL_Link = `http://localhost:4000/api/milks/${cowName}`;
    let createMilkProductionChartInSpecifiedDateHistoryRange = (dateRange) => {
      axios
        .get(FarmAPI_URL_Link)
        .then((response) => {
          milkProductionHistory = response;
          for (const property in milkProductionHistory.data[
            "Monthly Adjusted Time Series"
          ]) {
            let closingDateMonth = property.split("-")[1];
            let closingDateYear = property.split("-")[0];
            let closingDateDay = property.split("-")[2];
            let closingDateProperlyFormatted = `${closingDateMonth}/${closingDateDay}/${closingDateYear}`;
            let closingDateEpochTime =
              Date.parse(closingDateProperlyFormatted) / 1000;
            dateRange;
            closingDateProperlyFormatted;
            milkProductionHistoryDates.unshift(closingDateProperlyFormatted);
        
          }
        })
        .then(() => {
          let now = Date.now() / 1000;
          let dateRangeDate = now - dateRange;
          const isLaterDateThanDateRangeDate = (date) => {
            return date > dateRangeDate;
          };

          let arrayIndexWhereDateIsLargerThanDateRangeDate =
            milkProductionHistoryEpochDates.findIndex(
              isLaterDateThanDateRangeDate
            );
          milkProductionHistoryDates.splice(
            0,
            arrayIndexWhereDateIsLargerThanDateRangeDate
          );
          milkProductionHistoryPrices.splice(
            0,
            arrayIndexWhereDateIsLargerThanDateRangeDate
          );
          this.updateMilkProductionChart();
        });
    };
    // end of stock API code
    createMilkProductionChartInSpecifiedDateHistoryRange(
      23456345634563463465436
    );
  },
  setup() {
    let updateMilkProductionChart = () => {
      // beginning of line chart code //
      const ctx = document.getElementById("myChart");
      const labels = milkProductionHistoryDates;
      const data = {
        labels: labels,
        datasets: [
          {
            label: "My First Dataset",
            data: milkProductionHistoryPrices,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0,
            options: {
              responsive: true,
              maintainAspectRatio: false,
            },
          },
        ],
      };
      let myChart = null;

      const chartWithKey = Chart.getChart("myChart");
      if (chartWithKey != undefined) {
        chartWithKey.destroy();
      }
      myChart = new Chart(ctx, {
        type: "line",
        data: data,
      });
      myChart;
    };
    // beginning of stock API code
    let cowName = ref("1");
    let AlphaVantangeAPI_URL_Link = computed(
      () => "http://localhost:4000/api/milks/${cowName} + cowName"
    );
    let createMilkProductionChartInSpecifiedDateHistoryRangeSETUP = (
      dateRange
    ) => {
      console.log("selected stock symbol: " + cowName.value);
      // empty array if something already in there
      if (milkProductionHistoryDates.length > 0) {
        milkProductionHistoryDates = [];
        milkProductionHistoryEpochDates = [];
        milkProductionHistoryVolumes = [];
      }
      console.log(AlphaVantangeAPI_URL_Link.value);
      axios
        .get(AlphaVantangeAPI_URL_Link.value)
        .then((response) => {
          milkProductionHistory = response;
          for (const property in milkProductionHistory.data[
            "Monthly Adjusted Time Series"
          ]) {
            let closingPrice =
              milkProductionHistory.data["Monthly Adjusted Time Series"][
                property
              ]["4. close"];
            let closingDateMonth = property.split("-")[1];
            let closingDateYear = property.split("-")[0];
            let closingDateDay = property.split("-")[2];
            let closingDateProperlyFormatted = `${closingDateMonth}/${closingDateDay}/${closingDateYear}`;
            let closingDateEpochTime =
              Date.parse(closingDateProperlyFormatted) / 1000;
            dateRange;
            closingDateProperlyFormatted;
            closingPrice;
            closingDateEpochTime;
            milkProductionHistoryDates.unshift(closingDateProperlyFormatted);
            milkProductionHistoryEpochDates.unshift(closingDateEpochTime);
            milkProductionHistoryPrices.unshift(closingPrice);
          }
        })
        .then(() => {
          console.log(dateRange);
          let now = Date.now() / 1000;
          console.log("Now: " + now + "\n5 years ago: " + (now - dateRange));
          let dateRangeDate = now - dateRange;
          console.log("dateRangeDate: " + dateRangeDate);
          const isLaterDateThanDateRangeDate = (date) => {
            return date > dateRangeDate;
          };
          let arrayIndexWhereDateIsLargerThanDateRangeDate =
            milkProductionHistoryEpochDates.findIndex(
              isLaterDateThanDateRangeDate
            );
          console.log(arrayIndexWhereDateIsLargerThanDateRangeDate);
          milkProductionHistoryDates.splice(
            0,
            arrayIndexWhereDateIsLargerThanDateRangeDate
          );
          milkProductionHistoryPrices.splice(
            0,
            arrayIndexWhereDateIsLargerThanDateRangeDate
          );
          console.log(milkProductionHistoryDates);
          updateMilkProductionChart();
          console.log("In setup");
          console.log("In setup: " + myChart);
          console.log(window.myChart);
        });
    };
    // end of stock API code
    return {
      createMilkProductionChartInSpecifiedDateHistoryRangeSETUP,
      updateMilkProductionChart,
      cowName,
      AlphaVantangeAPI_URL_Link,
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #chartContainer {
  width: 100px;
  height: 30px;
  margin: 0 auto;
}
#cowNameSearchBar {
  padding: 10px;
}
#cowNameSearchForm .submit {
  padding: 10px 20px;
}
.dateRangeButtons button {
  padding: 10px 20px;
  margin: 2px;
} */
</style>

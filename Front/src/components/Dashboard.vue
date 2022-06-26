<template>
  <div class="dashboard" style="background-color: #f8f8f8">
    <div class="container">
      <div class="row" style="text-align: center">
        <h2>Farm Overview</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p class="milk-volume">Milk Volume</p>
            <h6 class="vol"><strong>50 </strong></h6>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p class="milk-volume">Milk Volume</p>
            <h6 class="vol"><strong>50 </strong></h6>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="card-body">
            <p class="milk-volume">Milk Volume</p>
            <h6 class="vol"><strong>50 </strong></h6>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="card-body">
            <p class="milk-volume">Milk Volume</p>
            <h6 class="vol"><strong>50 </strong></h6>
          </div>
        </div>
      </div>
    </div>

    <div class="cont" style="margin-top: 20px">
      <div class="row">
        <div class="col">
          <div
            class="card"
            style="height: 400px; margin-bottom: 10px; border-radius: 10px"
          >
            <div class="card-body" style="heigh: 300px">
             <Chart1 />
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card"
            style="height: 400px; margin-bottom: 10px; border-radius: 10px"
          >
            <div class="card-body">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Chart1 from "./Charts/Chart1.vue";
// import Chart3 from "./Charts/Chart3.vue";

export default {
  components: {
    Chart1,
    // Chart3,
  },
};
</script>
<style>
.card {
  border: none;
  box-shadow: 5px;
  border-radius: 20px;
  text-align: center;
  /* justify-content: center; */
}
</style>

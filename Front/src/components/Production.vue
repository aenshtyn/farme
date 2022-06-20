<template>
  <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
    {{ errors }}
  </div>

  <form @submit.prevent="saveMilk">
    <div class="submit-form">
      <!-- <div v-if="!submitted"> -->
      <div class="form-group">
        <label for="breed">Milking Time</label>
        <div class="select">
          <select v-model="form.milking_time">
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          <span class="focus"></span>
        </div>
      </div>
      <div class="form-group">
        <label for="day">Day</label>
        <input
          type="date"
          class="form-control"
          id="day"
          required
          v-model="form.day"
          name="day"
        />
      </div>
      <div class="form-group">
        <label for="owner">Volume</label>
        <input
          type="text"
          class="form-control"
          id="volume"
          required
          v-model="form.volume"
          name="volume"
        />
      </div>
      <div class="form-group">
        <label for="owner">Cow</label>
        <div class="select">
          <select v-model="form.cow_id">
            <option v-for="cow in cows" :key="cow.id" :value="cow.id">
              {{ cow.name }}
            </option>
          </select>
        </div>
        <span class="focus"></span>
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </div>
  </form>
  <!-- </div> -->
</template>

<script>
import useMilks from "../services/MilkDataService";
import useCows from "../services/AnimalDataService";
import { onMounted } from "vue";
import { ref, reactive } from "vue";
export default {
  name: "record_milk",
  setup() {
    const form = reactive({
      milking_time: "",
      day: null,
      volume: "",
      cow_id: "",
    });

    const cowsToggle = ref(false);
    const { cows, getCows } = useCows();
    const { errors, storeMilk } = useMilks();
    //  const cows = ref([]);

    const saveMilk = async () => {
      await storeMilk({ milk: { ...form } });
    };

    const showCows = () => {
      cowsToggle.value = !cowsToggle.value;
    };

    onMounted(getCows);

    return {
      form,
      errors,
      saveMilk,
      showCows,
      cowsToggle,
      getCows,
      cows,
    };
  },
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>

<template>
  <form @submit.prevent="saveCow">
    <div class="submit-form">
      <!-- <div v-if="!submitted"> -->
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="form.name"
          name="name"
        />
      </div>
      <div class="form-group">
        <label for="breed">Breed</label>
        <input
          class="form-control"
          type="text"
          id="breed"
          required
          v-model="form.breed"
          name="breed"
        />
      </div>
      <div class="form-group">
        <label for="age">Date of Birth</label>
        <input
          type="date"
          class="form-control"
          id="age"
          required
          v-model="form.dob"
          name="age"
        />
        </div>
        <div class="form-group">
          <label for="owner">Owner</label>
          <div class="select">
            <select v-model="form.patron_id">
              <option
                v-for="patron in patrons"
                :key="patron.id"
                :value="patron.id"
              >
                {{ patron.name }}
              </option>
            </select>
          </div>
          <span class="focus"></span>
        </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </div>
    <!-- </div> -->
  </form>
</template>
<script>
import usePatrons from "../../services/PatronDataService";
import useCows from "../../services/AnimalDataService";
import { ref, reactive } from "vue";
import { onMounted } from "vue";

export default {
  setup() {
    const form = reactive({
      name: "",
      breed: "",
      dob: "",
      patron_id: "",
    });

    const patronsToggle = ref(false);
    const { patrons, getPatrons } = usePatrons();
    const { errors, storeCow } = useCows();

    const saveCow = async () => {
      await storeCow({ cow: { ...form } });
    };

    const showPatrons = () => {
      patronsToggle.value = !patronsToggle.value;
    };

    onMounted(getPatrons);

    return {
      form,
      errors,
      saveCow,
      showPatrons,
      patronsToggle,
      getPatrons,
      patrons,
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

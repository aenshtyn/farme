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
        <div class="form-group">
          <label for="owner">owner</label>
          <input
            type="text"
            class="form-control"
            id="owner"
            required
            v-model="form.owner"
            name="owner"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </div>
    <!-- </div> -->
  </form>
</template>
<script>
import useCows from "../../services/AnimalDataService";
import { reactive } from "vue";

export default {
  setup() {
    const form = reactive({
      name: "",
      breed: "",
      dob: "",
      owner: "",
    });

    const { errors, storeCow } = useCows();

    const saveCow = async () => {
      await storeCow({ cow: { ...form } });
    };

    return {
      form,
      errors,
      saveCow,
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

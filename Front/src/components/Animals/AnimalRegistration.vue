<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="cow.name"
          name="name"
        />
      </div>
      <div class="form-group">
        <label for="breed">Breed</label>
        <input
          class="form-control"
          id="breed"
          required
          v-model="cow.breed"
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
          v-model="cow.dob"
          name="age"
        />
        <div class="form-group">
          <label for="owner">owner</label>
          <input
            class="form-control"
            id="owner"
            required
            v-model="cow.owner"
            name="owner"
          />
        </div>
      </div>
      <button @click="saveCow" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newCow">Add</button>
    </div>
  </div>
</template>
<script>
import AnimalDataService from "../../services/AnimalDataService";
export default {
  name: "add-cow",
  data() {
    return {
      cow: {
        id: null,
        name: "",
        breed: "",
        dob: "",
        owner: "",
      },
    };
  },
  methods: {
    saveCow() {
      var data = {
        name: this.cow.name,
        breed: this.cow.breed,
        dob: this.cow.dob,
        owner: this.cow.owner,
      };
      AnimalDataService.create(data)
        .then((response) => {
          this.cow.id = response.data.id;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newCow() {
      //   this.submitted = false;
      this.cow = {};
    },
  },
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>

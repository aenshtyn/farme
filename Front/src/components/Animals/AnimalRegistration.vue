<template>
  <div class="submit-form">
    <!-- <div v-if="!submitted"> -->
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        required
        v-model="name"
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
        v-model="breed"
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
        v-model="dob"
        name="age"
      />
      <div class="form-group">
        <label for="owner">owner</label>
        <input
          type="text"
          class="form-control"
          id="owner"
          required
          v-model="owner"
          name="owner"
        />
      </div>
    </div>
    <button @click="action" class="btn btn-success">Submit</button>
  </div>
  <!-- </div> -->
</template>
<script>
// import AnimalDataService from "../../services/AnimalDataService";

import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "add-cow",

  data() {
    return {
      id: null,
      name: null,
      breed: null,
      dob: null,
      owner: null,
    };
  },

  mounted() {},

  computed: {
    action() {
      return !this.id ? this.create : this.update;
    },
  },

  methods: {
    create() {
      axios
        .post(
          "http://localhost:4000/api/cows",
          {
            cow: {
              name: this.name,
              breed: this.breed,
              dob: this.dob,
              owner: this.owner,
            },
          }
        )
        .then((response) => {
          console.log(response.data.data);
        })
        .then(function () {
          location.href = "/animals/cows";
        })
        .catch((e) => {
          console.log(e);
          Swal.fire({
            title: "Failed",
            icon: "error",
          });
        });


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

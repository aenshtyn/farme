<template>
  <div class="container">
    <h6 style="text-align: center">List</h6>

    <table class="table table-bordered">
      <thead class="thead-dark" style="text-align: center">
        <tr style>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Breed</th>
          <th scope="col">Age</th>
          <th scope="col">Owner</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cow in cows" :key="cow.id">
          <td>{{ cow.id }}</td>
          <td>{{ cow.name }}</td>
          <td>{{ cow.breed }}</td>
          <td>{{ cow.dob }}</td>
          <td>{{ cow.owner }}</td>
          <td>
            <button class="btn btn-primary btn-sm" @click="viewCow">
              Open
            </button>
            <button class="btn btn-success btn-sm" @click="editCow">
              Edit
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteCow">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AnimalDataService from "../../services/AnimalDataService";
export default {
  name: "cows-list",
  data() {
    return {
      cows: [],
      currentIndex: -1,
      name: "",
    };
  },
  methods: {
    retrieveCows() {
      AnimalDataService.getAll()
        .then((response) => {
          this.cows = response.data.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveCows();
    },

    deleteCow() {
      AnimalDataService.deleteAll()
        .then((response) => {
          console.log(response);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveCows(this.$route.params.id);
  },
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>

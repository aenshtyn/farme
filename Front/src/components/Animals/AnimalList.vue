<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Cows List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(cow, index) in cows"
          :key="index"
          @click="setActiveCow(cow, index)"
        >
          {{ cow.name }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllCows">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentCow">
        <h4>Cow</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentCow.name }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentCow.breed }}
        </div>
                <div>
          <label><strong>Owner:</strong></label> {{ currentCow.owner }}
        </div>
                <div>
          <label><strong>Date of Birth:</strong></label> {{ currentCow.dob }}
        </div>
        <router-link :to="'/cows/' + currentCow.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Cow...</p>
      </div>
    </div>
  </div>
</template>
<script>
import AnimalDataService from "../../services/AnimalDataService";
export default {
  name: "cows-list",
  data() {
    return {
      cows: [],
      currentCow: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveCows() {
      AnimalDataService.getAll()
        .then(response => {
          this.cows = response.data.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveCows();
      this.currentCow = null;
      this.currentIndex = -1;
    },
    setActiveCow(cow, index) {
      this.currentCow = cow;
      this.currentIndex = cow ? index : -1;
    },
    removeAllCows() {
      AnimalDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      AnimalDataService.findByTitle(this.title)
        .then(response => {
          this.cows = response.data;
          this.setActiveCow(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveCows();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>

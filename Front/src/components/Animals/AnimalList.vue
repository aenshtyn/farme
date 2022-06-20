<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr class="text-muted">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Breed</th>
              <th scope="col">Owner</th>
              <th scope="col">Milk</th>
              
             
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in cows" :key="item.id">
              <th scope="row"> {{ item.id }}</th>
              <th scope="row"> {{ item.name }}</th>
              <th scope="row"> {{ item.age }} Months</th>
              <th scope="row"> {{ item.breed }}</th>
              <th scope="row"> {{ item.owner }}</th>
              <th scope="row"> {{ item.milks.volume }}</th>
              <!-- <th scope="row"> {{ item. }}</th> -->
              <!-- <td>John Doe</td>
              <td><input type="number"           
              name="name"
              id="name"
              required=""
              class="shadow-sm focus:ring-blue-500 placeholder:text-gray-400 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter milk volume..."></td>
              <td><input type="number"></td>
              <td>3</td> -->
              <td><button type="button" class="btn btn-sm btn-primary" >Save</button></td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
        <!-- <button type="button" class="btn btn-primary">Save</button> -->
  </div>

</template>
<script>
import useCows from "../../services/AnimalDataService";
import { onMounted } from "vue";
import { ref } from 'vue';
export default {
   setup() {
    const selected = ref();
    const { cows, getCows, destroyCow } = useCows();

    const deleteCow = async (id) => {
      if (!window.confirm("You sure?")) {
        return;
      }

      await destroyCow(id);
      await getCows();
    };

    onMounted(getCows);

    return {
      cows,
      deleteCow,
      selected,
    };
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

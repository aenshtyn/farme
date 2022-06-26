<template>
  <div class="container">

    <div class="row">
      <div class="col">

      <form>
      <div class="form-group"> <!-- Date input -->
        <label class="control-label" for="date">Date</label>
        <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text"/>
      </div>
        <button class="btn btn-primary " name="submit" type="submit">Submit</button>
      <div class="form-group"> <!-- Submit button -->
      </div>
     </form>
    </div>
      </div>
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr class="text-muted">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Morning</th>
              <th scope="col">Afternoon</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>             
            </tr>
          </thead>
          <tbody>
          <tr v-for="item in milks" :key="item.id">
              <th scope="row"> {{ item.id }}</th>
              <th scope="row"> {{ item.name }}</th>
              <th scope="row"> <input type="number">{{ item.volume }}</th>
              <th scope="row"> <input type="number">{{ item.volume }}</th>
              <th scope="row"> {{ item.volume }}</th>
              <td><button type="button" class="btn btn-sm btn-primary" >Save</button></td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
        <button type="button" class="btn btn-primary">Save</button>
  </div>
</template> 

<script>

import useMilks from "../services/MilkDataService";
import { onMounted } from "vue";
import { ref } from 'vue';
export default {
   setup() {
    const selected = ref();
    const { milks, getMilks} = useMilks();

    onMounted(getMilks);

    return {
  
      milks,
      selected,
    };
  },
};
</script>
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
            <tr>
              <th scope="row">1</th>
              <td>John Doe</td>
              <td><input type="number"></td>
              <td><input type="number"></td>
              <td>3</td>
              <td><button type="button" class="btn btn-sm btn-primary" >Save</button></td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
        <button type="button" class="btn btn-primary">Save</button>
  </div>
</template> 
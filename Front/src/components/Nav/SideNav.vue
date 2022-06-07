<template>
<!-- <Nav/> -->
 <div id="app">
    <div class="container-fluid" style="font: poppins">
      <div class="row flex-nowrap">
        <div
          class="col-auto col-md-3 col-xl-2 px-sm-2 px-0"
          style="background-color: #eef6f5"
        >
          <div
            class="d-flex flex-column sticky-top align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
          >
            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
              style="font-color: #aeb9be"
            >
              <li class="nav-item">
                <a href="/dashboard" class="nav-link align-middle px-0">
                  <i class="fs-4 bi-house"></i>
                  <span class="ms-1 d-none d-sm-inline">&nbsp; Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="/production"
                  data-bs-toggle="collapse"
                  class="nav-link px-0 align-middle"
                >
                  <i class="fs-4 bi-speedometer2"></i>
                  <span class="ms-1 d-none d-sm-inline">&nbsp; Production</span>
                </a>
              </li>
              <li>
                <a href="/orders" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-table"></i>
                  <span class="ms-1 d-none d-sm-inline">&nbsp; Orders</span></a
                >
              </li>
              <li>
                <a
                  href="/products"
                  data-bs-toggle="collapse"
                  class="nav-link px-0 align-middle"
                >
                  <i class="fs- bi-grid"></i>
                  <span class="ms-1 d-none d-sm-inline">&nbsp; Products</span>
                </a>
                <ul
                  class="collapse nav flex-column ms-1"
                  id="submenu3"
                  data-bs-parent="#menu"
                >
                  <li class="w-100">
                    <a href="#" class="nav-link px-0">
                      <span class="d-none d-sm-inline">Product</span> 1</a
                    >
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0">
                      <span class="d-none d-sm-inline">Product</span> 2</a
                    >
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0">
                      <span class="d-none d-sm-inline">Product</span> 3</a
                    >
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0">
                      <span class="d-none d-sm-inline">Product</span> 4</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="/customers" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-people"></i>
                  <span class="ms-1 d-none d-sm-inline">&nbsp; Customers</span>
                </a>
              </li>
              <li>
                <a href="/hr" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-diagram-2"></i>
                  <span class="ms-1 d-none d-sm-inline">&nbsp; HR</span>
                </a>
              </li>
                         <li>
                <a href="/animals/cows/" class="nav-link px-0 align-middle">
                  <i class="fs-4 fs- bi-grid"></i>
                  <span class="ms-1 d-none d-sm-inline">&nbsp; Animals</span>
                </a>
              </li>

                                     <li>
                <a href="/animals/cows/add" class="nav-link px-0 align-middle">
                  <i class="fs-4 fs- bi-grid"></i>
                  <span class="ms-1 d-none d-sm-inline">&nbsp; Add Animal</span>
                </a>
              </li>

              <li>
                <a href="/inventory" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-house-door"></i>
                  <span class="ms-1 d-none d-sm-inline">&nbsp; Inventory</span>
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>

        <div class="col py-3" style="background-color: #f8f8f8">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Nav from "./components/Nav/Nav";
export default {
  // components: {Nav}
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.nav-link {
  color: #aeb9be;
}
#app {
  font-family: Montserrat;
}

li { margin: 10px}
span {
  font-size: 18px;
  padding: 10px
}
/* this is needed to make the content scrollable on larger screens */
@media (min-width: 576px) {
  .h-sm-100 {
    height: 100%;
  }
}
</style>

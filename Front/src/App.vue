<template>

<meta name="csrf-token" content="{{ csrf_token() }}">
<Nav/>
<SideNav/>

        <div class="col py-3" style="background-color: #ffffff">
          <router-view />
        </div>
</template>

<script>

window.csrf_token = "{{ csrf_token() }}"
import Nav from "./components/Nav/Nav";
// import SideNav from "./components/Nav/SideNav";
export default {
  components: {
    // SideNav,
     Nav,
     }
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

<template>
  <div>
  <b-navbar  type="dark" variant="info" fixed="top">
    <b-navbar-brand href="#" id="company"><h3>CruiseMart By Kelvin Eze</h3></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search Products"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#company{
    margin-left: 500px;
}

@media screen and (max-width: 680px){
  #sidebar{
    display: none;
  }
  #company{
margin-left: 10px;
  }
}
</style>

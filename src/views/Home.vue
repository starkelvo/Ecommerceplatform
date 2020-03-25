<template>

  <div class="home">
  <Appheader/>
    <b-row class="product-list">
    <b-col cols="2" id="sidebar">
    <p><strong>Product Categories</strong></p><hr>
    <Category v-for="prodtypes in categories" :type="prodtypes" :key="prodtypes.id"/>
    
    
    </b-col>
    <b-col cols="10">
      <Carousel/>
      <p><strong>Top Selling Products</strong></p>
      <div class="row">
      <div class="col-md-4 col-lg4" v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'product', params: { id: product.id}}">
        <img :src="imagePath(product)" alt="" class="img-fluid" >
         <p class="product-title">{{ product.name }}</p>
          <p><em>{{ product.price }}</em></p>
          <h3 class="button">Order Now</h3>
        </router-link>
      </div>
    </div>
    </b-col>
  </b-row>
  <Appfooter/>
  </div>
</template>

<script>
// @ is an alias to /src
// import products from "../components/Products.vue"
import Category from "../components/Category.vue"
import Appheader from "../components/Appheader.vue"
import Carousel from "../components/Carousel.vue"
import Appfooter from "../components/Appfooter.vue"

export default {
  name: 'Home',
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  methods: {
    imagePath(product) {
      return require(`../../src/assets/images/${product.images[0]}`);
    }
  },
  data(){
  return{
    categories: [
      {
        id:1,
        name:"Clothings"
      },
      {
       id: 2,
       name: "Automobile",
      },
      {
       id: 3,
       name: "Phones",
      },
      {
       id: 4,
       name: "Clothings",
      },
      {
       id: 5,
       name: "Kitchen Accessories",
      },
      {
       id: 6,
       name: "Electronics",
      },
      {
       id: 7,
       name: "Beauty Products",
      }
      ]
  }
  },
  

  components: {
    // products,
    Category,
    Appheader,
    Carousel,
    Appfooter
  }
}
</script>
<style scoped>
#sidebar{
  background-color: white; 
  overflow: hidden;
}
strong{
  color: blue;
  font-size: 20px;
  margin-top: 200px;
  
}
.product-list{
  margin-top: 100px;
  overflow: hidden;
}
@media screen and (max-width: 680px){
  #sidebar{
    display: none;
  }
  .row{
    width: auto;
    margin-left: 20px;
  }
  .home{
    width: auto;
  }
  .button{
    display: none;
  }
}
.button{
  border: 2px green solid;
  background-color: green;
  width: 300px;
  color: beige;
  border-radius: 5px;
}
</style>

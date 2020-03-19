<template>

  <div class="home">
  <Appheader/>
    <b-row class="product-list">
    <b-col cols="2" id="sidebar">
    <p><strong>Product Categories</strong></p><hr>
    <Category v-for="prodtypes in categories" :type="prodtypes" :key="prodtypes.id"/></b-col>
    <b-col cols="10">
      <Carousel/>
      <p><strong>Top Selling Products</strong></p>
      <products v-for="product in products" :listing="product" :key="product.id"/>
    </b-col>
  </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import products from "../components/Products.vue"
import Category from "../components/Category.vue"
import Appheader from "../components/Appheader.vue"
import Carousel from "../components/Carousel.vue"

export default {
  name: 'Home',
  data(){
  return{
    products:[
       {
      id: 1,
      name: "2020 Mercedes-Benz E-Class",
      imageLink:require("../../src/assets/images/benze.webp"),
      description: "The E 350 replaces last year's E 300 and gets a bump in horsepower",
      price: "$107,350"
    },
     {
      id: 2,
      name: "2020 Mazda CX-30",
      imageLink:require("../../src/assets/images/mazda.webp"),
      description: "The 2020 Mazda CX-30 is built to make you feel alive.",
      price: "$29,200"
    },
     {
      id: 3,
       name: "Anker SoundCore",
      imageLink:require("../../src/assets/images/anker.jpg"),
      description: "Anker SoundCore 2 Portable Bluetooth Wireless Speaker",
      price: "$37.4"
    },
     {
      id: 4,
      name: "Skinny Jeans in Dark Rinse Wash",
      imageLink:require("../../src/assets/images/jean.jpeg"),
      description: "Expertly designed with premium mills to smooth, lift, fit ",
      price: "$91.32"
    },
     {
      id: 5,
      
      name: "Wrist Watches For Men",
      imageLink:require("../../src/assets/images/watch.jpg"),
      description: "High Imported Quality, Shape: Round, Case: High Quality Stainless",
      price: "$201.32"
    },
     {
      id: 6,
      name: "MERCEEDES BENZ CLA ",
      imageLink:require("../../src/assets/images/benz1.jpeg"),
      description: "High Imported Quality, Shape: Round, Case: High Quality Stainless",
      price: "$200,101.32"
    },
    {
      id: 7,
      name: "2020 Mercedes-Benz E-Class",
      imageLink:require("../../src/assets/images/benze.webp"),
      description: "The E 350 replaces last year's E 300 and gets a bump in horsepower",
      price: "$107,350"
    },
     {
      id: 8,
      name: "2020 Mazda CX-30",
      imageLink:require("../../src/assets/images/mazda.webp"),
      description: "The 2020 Mazda CX-30 is built to make you feel alive.",
      price: "$29,200"
    },
     {
      id: 9,
       name: "Anker SoundCore",
      imageLink:require("../../src/assets/images/anker.jpg"),
      description: "Anker SoundCore 2 Portable Bluetooth Wireless Speaker",
      price: "$37.4"
    },
     {
      id: 10,
      name: "Skinny Jeans in Dark Rinse Wash",
      imageLink:require("../../src/assets/images/jean.jpeg"),
      description: "Expertly designed with premium mills to smooth, lift, fit ",
      price: "$91.32"
    }
    ],
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
    products,
    Category,
    Appheader,
    Carousel
  }
}
</script>
<style scoped>
#sidebar{
  background-color: white; 
}
strong{
  color: blue;
  font-size: 20px;
  margin-top: 200px;
}
.product-list{
  margin-top: 100px;
}
</style>

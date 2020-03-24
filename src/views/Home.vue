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
      <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index" id="products">
        <img :src="data.imageLink" class="img-fluid" @click="goTodetail(data.id)">
         <p @click="goTodetail(fata.id)">{{data.name}}</p>
         <p>{{data.price}}</p>
        
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
  data(){
  return{
    methods:{
  goTodetail(id) {
    this.$router.push({name:'details',params:{Pid:id}})
  }
  },
    products:[
       {
      id: 1,
      name: "KQRAS Men's Smart Watches Sport Fitness Tracker Color Screen-Black",
      imageLink:require("../../src/assets/images/smartwatch.jpg"),
      price: "₦2,999"
    },
     {
      id: 2,
      name: "KQRAS Men's Smart Watches Sport Fitness Tracker Color Screen-Black",
      imageLink:require("../../src/assets/images/mobile watch.jpg"),
      price: "₦4,999"
    },
     {
      id: 3,
       name: "V9 Smart Mobile Sport Watch With SIM And Memory Card Slot",
      imageLink:require("../../src/assets/images/wristband.jpg"),
      price: "₦3,999"
    },
     {
      id: 4,
      name: "Sony PS3 Controller Wireless Game Pad - DualShock 3 For Official PlayStation 3- Black",
      imageLink:require("../../src/assets/images/gamepad.jpg"),
      price: "₦3,999"
    },
     {
      id: 5,
      
      name: "Portable High Definition Handheld Game 4.3'' Black",
      imageLink:require("../../src/assets/images/nintendo.jpg"),
      price: "₦3,999"
    },
     {
      id: 6,
      name: "Samsung Galaxy A30s 6.4-Inch (4GB,64GB ROM) Android 9.0, (25MP+8MP+5MP)+ 16MP Dual SIM 4000mAh 4G LTE - Prism Crush White",
      imageLink:require("../../src/assets/images/samsung.jpg"),
      price: "₦3,999"
    },
    {
      id: 7,
      name: "Elegant Designer Athletic Sneakers V2- Gold & Black",
      imageLink:require("../../src/assets/images/shoe.jpg"),
      price: "₦3,999"
    },
     {
      id: 8,
      name: "LED Backlight Sport Waterproof Quartz Wrist Watches-Black",
      imageLink:require("../../src/assets/images/shoe.jpg"),
      price: "₦3,999"
    },
     {
      id: 9,
       name: "LED Backlight Sport Waterproof Quartz Wrist Watches-Black",
      imageLink:require("../../src/assets/images/shoe.jpg"),
      price: "₦3,999"
    },
     {
      id: 10,
      name: "LED Backlight Sport Waterproof Quartz Wrist Watches-Black",
      imageLink:require("../../src/assets/images/shoe.jpg"),
      price: "₦3,999"
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
}

</style>

<template>
 <div class="details">
  <div class="container">
   <h1 class="text-primary text-center">{{title}}</h1>
  </div>
 </div>
</template>
<script>
 export default{
  name:'details',
  data(){
   return{
     products:[
       {
      id: 1,
      name: "2020 Mercedes-Benz E-Class",
      imageLink:require("../../src/assets/images/benze.webp"),
      price: "$107,350"
    },
     {
      id: 2,
      name: "2020 Mazda CX-30",
      imageLink:require("../../src/assets/images/mazda.webp"),
      price: "$29,200"
    },
     {
      id: 3,
       name: "Anker SoundCore",
      imageLink:require("../../src/assets/images/anker.jpg"),
      price: "$37.4"
    },
     {
      id: 4,
      name: "Skinny Jeans in Dark Rinse Wash",
      imageLink:require("../../src/assets/images/jean.jpeg"),
      price: "$91.32"
    },
     {
      id: 5,
      
      name: "Wrist Watches For Men",
      imageLink:require("../../src/assets/images/watch.jpg"),
      price: "$201.322"
    },
     {
      id: 6,
      name: "MERCEEDES BENZ CLA ",
      imageLink:require("../../src/assets/images/benz1.jpeg"),
      price: "$200,101.32"
    },
    {
      id: 7,
      name: "2020 Mercedes-Benz E-Class",
      imageLink:require("../../src/assets/images/benze.webp"),
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
    id:this.$route.params.Pid,
    title:"details"
   }
  }
 }
</script>
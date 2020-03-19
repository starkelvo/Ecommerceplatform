<template>
<div class="slides">
 <carousel 
 :autoplay="true" 
 :per-page="1" 
 :autoplayTimeout="2000" 
 :mouse-drag="true" 
 :speed="500"
 :loop="true"
 :centerMode="true"
 :spacePadding="0">
   <slide v-for="pics in slides" :key="pics.id">
    <img :src="pics.image" height="300px" width="60%">
  </slide>
</carousel>
</div>
</template>

<script>
  export default {
    data(){
      return{
        slides: [
           {

      id: 1,
      image:require("../../src/assets/images/benze.webp")
      
    },
     {
      id: 2,
      image:require("../../src/assets/images/mazda.webp")
    },
     {
      id: 3,
      image:require("../../src/assets/images/anker.jpg")
    },
        {

      id: 4,
      image:require("../../src/assets/images/benz2.jpeg")
      
    },
     {
      id: 5,
      image:require("../../src/assets/images/watch.jpg")
    },
     
        ]
      }
    }
    
        
      }
</script>

<style>
  carousel{
    
    margin-left: 400px;
    margin-top: 10px;
    border-radius: 5px;
  }
  .slides{
    margin-top: 10px;
  }
</style>
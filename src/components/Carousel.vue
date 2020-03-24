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
    <img :src="pics.image" height="300px" width="1000px;">
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
      image:require("../../src/assets/images/carous1.jpg")
      
    },
     {
      id: 2,
      image:require("../../src/assets/images/carous2.jpg")
    },
     {
      id: 3,
      image:require("../../src/assets/images/carous3.jpg")
    },
        {

      id: 4,
      image:require("../../src/assets/images/carous4.jpg")
      
    },
     {
      id: 5,
      image:require("../../src/assets/images/carous5.jpg")
    },
     
        ]
      }
    }
    
        
      }
</script>

<style>
  carousel{
    height: 300px;
    margin-top: 10px;
    border-radius: 5px;
    overflow: hidden;
  }
  .slides{
    margin-top: 10px;
  }
  @media screen and (max-width: 680px){
  carousel{
    margin-left: 30px;
  }
}
</style>
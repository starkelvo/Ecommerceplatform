<template>
  <div>
      <Appheader/>
    <section class="wrapper">
      <div class="flex-col">
        <div>
        <img :src="imagePath(product)" alt="" height="300px" width="300px"><hr>
        <div class="smallerimages" style="margin-top:10px">
                      
        <img :src="imagePath(product)" alt="" width=100 height=100 @click="changeimage1" class="small">
        <img :src="imagePath1(product)" alt="" width=100 height=100 @click="changeimage2" class="small">
        <img :src="imagePath2(product)" alt="" width=100 height=100 @click="changeimage3" class="small">
                         
           <hr>         
        </div>
        </div>
        <div class="flex-col--2">
            <div class="Details">
          <h5>{{ product.name }}</h5><hr>
          <h2>{{ product.price }}</h2><hr>
          <button>Add To Cart</button><hr>
          <p>Product Details: {{ product.details }}</p>
            </div>
        </div>
        <div class="flex-col--3">
          <p><strong>DELIVERY & RETURNS</strong></p>
          <p>Delivery Information</p>
           With CruiseMart your
            gadgets are assured and 
            reliable, get started.

            Returns With CruiseMart your
              gadgets are assured and 
              <p>reliable, get started.</p>
        </div>
      </div>
    </section>
    <Appfooter/>
  </div>
</template>

<script>
import Appheader from "../components/Appheader.vue"
import Appfooter from "../components/Appfooter.vue"
export default {
  name: 'product',
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id)
    }
  },
  methods: {
    imagePath(product) {
      return require(`../../src/assets/images/${product.images[0]}`);
    },
    imagePath1(product) {
      return require(`../../src/assets/images/${product.images[1]}`);
    },
    imagePath2(product) {
      return require(`../../src/assets/images/${product.images[2]}`);
    },
  
    changeimage1:function(){
          this.imagePath = this.imagePath1      
        },
         changeimage2:function(){
                this.imagePath = this.imagePath2       
        },
  },
  components: {
    // products,
    Appheader,
    Appfooter
  }
};
</script>

<style lang="scss">
.flex-col {
  display: flex;
  align-items: justify-content;
  text-align: left;
}
.flex-col--2 {
  width: 500px;
  margin-left: 150px;
  border: 1px rgb(143, 139, 139) lightgrey;
}
.flex-col--3{
  width: 200px;
  margin-left: 40px;
}
.wrapper{
    margin-top: 100px;
}
h5, h2{
  color: rgb(47, 120, 255);
}
img{
  margin-left: 50px;
}
button{
  background-color: rgb(96, 96, 221);
  border: 0px rgb(195, 204, 72);
  color: white;
  width: 200px;
  border-radius: 5px;
}
@media screen and (max-width: 680px){
  .flex-col--2{
    margin: 5px;
    width: auto;
    float: none;
  }
  .flex-col{
    display:block;
    margin-left: 30px;
  }
  .flex-col--3{
    display: none;
  }
  img{
    width: auto;
    float: none;
  }
}
.small{
  border: 1px black solid;
}


</style>
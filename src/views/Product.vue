<template>
  <div>
      <Appheader/>
    <section class="wrapper">
      <div class="flex-col">
        <img :src="imagePath(product)" alt="" height="400px" width="400px">
        <div class="flex-col--2">
            <div class="Details">
          <h5>{{ product.name }}</h5>
          <h2>{{ product.price }}</h2>
          <button>Add To Cart</button>
          <p>Product Details: {{ product.details }}</p>
            </div>
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
    }
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
  align-items: flex-start;
  text-align: left;
}
.flex-col--2 {
  width: 500px;
  margin-left: 150px;
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
  background-color: green;
  border: 0px green;
  color: white;
  width: 400px;
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
  img{
    width: auto;
    float: none;
  }
}

</style>
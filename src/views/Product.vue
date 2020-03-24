<template>
  <div>
      <Appheader/>
    <section class="wrapper">
      <div class="flex-col">
        <img  class="flex-col--2" :src="imagePath(product)" alt="">
        <div class="flex-col--2">
            <div class="Details">
          <h2>{{ product.name }}</h2>
          <h2>{{ product.price }}</h2>
          <p>Product Details: {{ product.details }}</p>
          <!-- <p>Size: {{ product.size }}</p>
          <p>Color: {{ product.color }}</p>
          <p><em>{{ product.quantity }} left in stock</em></p> -->
          <!-- <h3>Details</h3>
          
            <p>Detail: {{ product.details.detaill }}</p>
            <p>Fit: {{ product.details.fit }}</p>
            <p>Maintenance: {{ product.details.maintenance }}</p> -->
            <!-- <p v-if="product.details.additional">Additional: {{ product.details.additional }}</p> -->
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
}
.flex-col--2 {
  width: 50%;
}
.wrapper{
    margin-top: 100px;
}

</style>
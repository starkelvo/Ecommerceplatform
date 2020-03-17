<template>
    <div class="products">
<div class="image"><img :src="listing.imageLink" height="200px" width="400px"></div>
<div class="productDetails" text-alone:none> 
<p>{{listing.name}}</p><hr>
<p>{{listing.description}}</p><hr>
<p>{{listing.price}}</p>
<b-button variant="success" id="button">Buy Now</b-button>
</div>
    </div>
</template>
<script>
export default {
    props : ['listing']
}
</script>
<style scoped>
.products{
    display: inline-block;
    height: 450px;
    border: 1px rgb(194, 194, 228) solid;
    width: 500px;
    margin-top: 10px;
    border-radius: 5px;
    margin-left: 20px;
    
}
img{
    margin-top: 5px;
}
#button{
    margin-top: 2px;
}
.productDetails{
    width: 300px;
   color: blue;
    margin: 0 auto;
    margin-top: 10px;
    text-align: none;
}
</style>
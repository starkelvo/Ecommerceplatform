<template>
    <div class="category">
 <p>{{type.name}}</p>

    </div>
</template>
<script>
export default {
    props : ['type']
}
</script>
<style scoped>
.category{
    width: 200px;
    border: 2px rgb(247, 240, 240) solid;
    margin-left: 10px;
    margin-top: 2px;
    border-radius: 5px;
}
</style>
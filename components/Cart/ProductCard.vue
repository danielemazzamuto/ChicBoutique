<template>
  <div class="max-w-2xl mx-auto card flex my-3">
    <div>
      <img :src="productCart.image" alt="product thumb" class="thumb">
    </div>
    <div class="flex flex-col flex-grow justify-between ml-2 py-2 px-2 shadow">
      <p class="font-bold text-gray-500 mt-4 truncate text-center">{{productCart.title}}</p>
      <p class="font-bold text-gray-500 mt-1 truncate text-center">${{productCart.price}}</p>
      <button @click="removeProdCart(productCart.id)" class="btn bg-red-400 mx-20">Remove</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  productCart: Object
})

const removeProdCart = (prodId) => {
  console.log(prodId);
}
</script>

<style scoped>
  .thumb {
    max-height: 200px;
    width: 200px;
    margin: 0 auto;
  }
</style>
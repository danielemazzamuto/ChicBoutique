<template>
<div class="max-w-2xl mx-auto card flex my-3">
  <div class="card-image">
    <img :src="productCart.image" alt="product thumb" class="">
  </div>
  <div class="card-description">
    <p class="font-bold text-gray-500 mt-4 truncate text-center">{{productCart.title}}</p>
    <p class="font-bold text-gray-500 mt-1 truncate text-center">${{productCart.price}}</p>
    <button @click="removeProdCart(productCart.id)" class="btn bg-red-400 mx-20">Remove</button>
  </div>
</div>
</template>

<script setup>
import { useShopStore } from '@/stores/useStore.js'
const shopStore  = useShopStore()

const props = defineProps({
  productCart: Object
})

const removeProdCart = (prodId) => {
  shopStore.removeProdcart(prodId)
}
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
}

.card-image {
  flex: 1;
  padding: 10px; /* Add padding as needed */
}

.card-image img {
  padding: 10px; /* Add padding to the image */
}

.card-description {
  flex: 2;
  padding: 10px; /* Add padding as needed */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
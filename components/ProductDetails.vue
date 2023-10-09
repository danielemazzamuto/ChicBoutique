<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product img" class="mx-auto my-7">
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button @click="addToCart(product)" class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import Store
import { useShopStore } from '@/stores/useStore.js'
import nuxtStorage from 'nuxt-storage';

const shopStore  = useShopStore()
const { product } = defineProps(['product'])


// add cart + local storage
const addToCart = (product) => {
    shopStore.addCart(product);
    console.log(shopStore.cart.products);
    //add to local storage
    const cartLocalStorage = nuxtStorage.localStorage.getData('cart');
    nuxtStorage.localStorage.setData('cart',
      [cartLocalStorage,product]
    )
}

</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>
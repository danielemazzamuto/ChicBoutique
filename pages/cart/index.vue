<template>
  <div>
    <div v-if="productsCart.length" class="flex justify-end">
      <p class="font-bold text-gray-800 text-xl">Total: ${{ totCartPrice }}</p>
    </div>
    <p v-if="!productsCart.length" class="text-2xl text-center text-gray-600">Your cart is empty!</p>
    <CartProductCard v-for="prod in productsCart" :key="prod.id" :productCart="prod" /> 
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
});

import { useShopStore } from '@/stores/useStore'
import { storeToRefs } from 'pinia'


const shopStore = storeToRefs(useShopStore())
const productsCart = shopStore.cart
const totCartPrice = shopStore.totalCartPrice
</script>


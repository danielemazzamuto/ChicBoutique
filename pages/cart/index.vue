<template>
  <div>
    <p v-if="!productsCart.length" class="text-lg text-center">The cart is empty!</p>
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
</script>


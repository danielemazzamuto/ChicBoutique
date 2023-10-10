<template>
  <div>
    <header class="shadow-sm bg-white ">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/products" class="font-bold text-2xl">ChicBoutique Merch</NuxtLink>
        <div>
        <div class="flex justify-center items-center">
          <span class="rounded-full bg-green-200 px-1 mr-1">{{ countCart }}</span>
          <NuxtLink to="/cart"><i class="material-icons text-3xl">shopping_cart_checkout</i></NuxtLink>
        </div>
      </div>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>

    <Footer />
</div>
</template>

<script setup>
// Import Store
import nuxtStorage from 'nuxt-storage';
import { useShopStore } from '@/stores/useStore.js'
import { storeToRefs } from 'pinia'

useHead({
    title: 'ChicBoutique Merch',
})


const shopStore = storeToRefs(useShopStore())

//load cart from local storage on mounted
onMounted(() => {
  if (nuxtStorage.localStorage.getData('cart')?.length) {
    const currentProducts = nuxtStorage.localStorage.getData('cart')
    shopStore.cart.value.push(...currentProducts)
  }
});

const countCart = shopStore.totProductsCart;


</script>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}
</style>
<template>
  <div>
    <header class="shadow-sm bg-white ">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold text-2xl">ChicBoutique Merch</NuxtLink>
        <div>
        <i class="material-icons text-3xl">shopping_cart_checkout</i>
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
import { useCounterStore } from '@/stores/useStore'

// access the `store` variable anywhere in the component ✨
const {name} = useCounterStore()
console.log(name);

useHead({
    title: 'ChicBoutique Merch',
})
</script>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}
</style>
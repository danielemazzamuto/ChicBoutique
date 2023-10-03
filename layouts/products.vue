<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/" class="font-bold text-xl">ChicBoutique Merch</NuxtLink>
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
useHead({
    title: 'ChicBoutique Merch',
})
</script>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}
</style>
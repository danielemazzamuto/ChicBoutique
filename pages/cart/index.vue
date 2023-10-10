<template>
    <div class="max-w-lg mx-auto card text-center flex flex-1 flex-col justify-between">
    <img src="https://images.unsplash.com/photo-1696523709205-9b4e668f6ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="product thumb" class="thumb">
    <p class="font-bold text-gray-500 mt-4 truncate">Title</p>
    <p class="font-bold text-gray-500 mt-1 truncate">29.99</p>
    <button class="btn bg-red-400 my-4">Remove</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
})
</script>

<style scoped>
  .thumb {
    max-height: 200px;
    max-width: 100%;
    margin: 0 auto;
  }
</style>
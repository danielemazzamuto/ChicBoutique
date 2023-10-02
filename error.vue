<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button @click="handleError" class="btn mt-7 my-4">Go Home</button>
  </div>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/'
  })
}
</script>

<style scoped>

</style>
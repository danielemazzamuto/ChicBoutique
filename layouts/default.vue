<template>
    <div>
        <NavBar />

        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>

        <Footer />
    </div>
</template>

<script setup>
useHead({
    title: 'ChicBoutique',
})
</script>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}
</style>
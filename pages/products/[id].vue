<template>
    <div>
        <Head>
            <Title>ChicBoutique | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetails :product="product"/>  
    </div>
</template>

<script setup>
/* apply different layout */
definePageMeta({
    layout: 'products'
})

const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

// fetch the product
const { data: product } = await useFetch(uri, {key: id})

// if the product doesn't exist, throw an error
if(!product.value){
    throw createError({
        statusCode: 404,
        message: `Product with ID ${id} not found!`
    })
}
</script>

<style scoped>

</style>
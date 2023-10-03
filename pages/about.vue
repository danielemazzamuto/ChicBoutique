<template>
    <div>
        <h2>About</h2>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
// const { data } = await useFetch('/api/test?name=daniele', {
//     method: 'post',
//     body: {
//         age: 30,
//     }
// })
const { data } = await useFetch('/api/test')
console.log(data);


</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>
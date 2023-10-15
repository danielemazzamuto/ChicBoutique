//import { defineStore } from 'pinia'

export const useShopStore = defineStore('shopStore', () => {
  
  const cart = ref([]);

  const addCart = (prod) => {
    const prodObj = {
      id: prod.id,
      image: prod.image,
      title: prod.title,
      price: prod.price,
    }
    cart.value.push(prodObj)
  }

  const removeProdcart = (id) => {
    return cart.value = cart.value.filter(prod => prod.id !== id)
  }

  const totalCartPrice = computed(() => {
    return cart.value.reduce((accumulator, currentValue) => {
      return parseFloat(accumulator) + parseFloat(currentValue.price);
    }, 0)
  });
  
  const totProductsCart = computed(() => {
    return cart.value.length
  })
 
  return { 
    cart,
    addCart,
    totProductsCart,
    removeProdcart,
    totalCartPrice
   }
})
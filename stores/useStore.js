
import { defineStore } from 'pinia'

export const useShopStore = defineStore('shopStore', () => {
  
  const cart = ref({
    products: [],
  })

  const addCart = (prod) => {
    const prodObj = {
      id: prod.id,
      title: prod.title,
      price: prod.price,
    }
    cart.value.products.push(prodObj)
  }

  const totProductsCart = computed(() => cart.value.products.length)

  return { 
    cart,
    addCart,
    totProductsCart
   }
})
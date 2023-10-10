
export const useShopStore = defineStore('shopStore', () => {
  
  const cart = ref([]);

  const addCart = (prod) => {
    const prodObj = {
      id: prod.id,
      title: prod.title,
      price: prod.price,
    }
    cart.value.push(prodObj)
  }

  const totProductsCart = computed(() => {
    return cart.value.length
  })
 
  return { 
    cart,
    addCart,
    totProductsCart
   }
})
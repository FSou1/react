const updateQuantity = (quantity: number) => {
  console.log('Updating quantity to', quantity)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(quantity)
      return quantity
    }, 2000)
  })
}

export { updateQuantity }

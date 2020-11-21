import { cartItemsVar, cartTotalVar, baseCurrencyVar } from '../cache';


export const updateCartTotal = currency => {
  const cartItems = cartItemsVar();

  cartTotalVar(cartItems.reduce((accumulator, cartItem) => {
    return {
      currency,
      amount: accumulator.amount + cartItem.price
    }
  }, {currency, amount: 0})) 
}

export const updateCartPrices = products => {
  const cartItems = cartItemsVar();
  const currency = baseCurrencyVar();

  cartItemsVar(
    cartItems.reduce((accumulator, cartItem) => {
      const productIndex = products.findIndex(product => product.id === cartItem.id);

      return productIndex === -1 ? accumulator : [...accumulator, {
        ...cartItem,
        price: products[productIndex].price * cartItem.quantity,
        base_price: products[productIndex].price,
        baseCurrencyQuery: currency
      }]
    }, [])
  )
  
  updateCartTotal(currency)
}

export const updateCartQuantity = (id, type) => {
  const cartItems = cartItemsVar();
  const currency = baseCurrencyVar();

  cartItemsVar(
    cartItems.map(
      cartItem => cartItem.id !== id ? 
        cartItem : { 
          ...cartItem, 
          price: type === "INCREASE" ? 
            cartItem.base_price * (cartItem.quantity + 1) : 
            cartItem.base_price * (cartItem.quantity - 1),
          quantity: type === "INCREASE" ? 
            cartItem.quantity + 1 : 
            cartItem.quantity - 1 
        }
    )
  ) 

  updateCartTotal(currency);
}

export const addNewCartItem = product => {

  const cartItems = cartItemsVar();
  const currency = baseCurrencyVar();

  const { price } = product;

  cartItemsVar([
    {
      ...product,
      quantity: 1,
      base_price: price,
      baseCurrencyQuery: currency
    }, ...cartItems
  ])

  updateCartTotal(currency);
}

export const deleteCartItem = id => {
  const cartItems = cartItemsVar();
  const currency = baseCurrencyVar();

  cartItemsVar(cartItems.filter(cartItem => cartItem.id !== id))
  updateCartTotal(currency);
}
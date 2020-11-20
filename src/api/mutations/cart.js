import { cartItemsVar, cartTotalVar } from '../cache';


export const updateCartTotal = () => {
  const cartItems = cartItemsVar();
  cartTotalVar(cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.price, 0)) 
}

export const updateCartQuantity = (id, type) => {
  const cartItems = cartItemsVar();

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

  updateCartTotal();
}

export const addNewCartItem = product => {

  const cartItems = cartItemsVar();
  const { id, title, image_url, price } = product;

  cartItemsVar([
    {
      id,
      title,
      image_url,
      price,
      quantity: 1,
      base_price: price
    }, ...cartItems
  ])

  updateCartTotal();
}

export const deleteCartItem = id => {
  const cartItems = cartItemsVar();
  cartItemsVar(cartItems.filter(cartItem => cartItem.id !== id))
  updateCartTotal()
}
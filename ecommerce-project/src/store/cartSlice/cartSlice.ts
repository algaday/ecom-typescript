import { createSlice } from '@reduxjs/toolkit'

export type Food = {
  id: number
  title: string
  pricePerServing: number
  image: string
  quantity: number
}

export type Meal = {
  image: string
  title: string
  id: number
  pricePerServing: number
}

type CartModel = {
  cart: Food[]
}

type PayloadWithData = {
  type: string
  payload: Meal
}
type Payload = {
  type: string
  payload: number
}

const initialState: CartModel = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadWithData) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      )
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    increaseQuantity: (state, action: Payload) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload)
      itemInCart && itemInCart.quantity++
    },
    decreaseQuantity: (state, action: Payload) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload)
      if (itemInCart && itemInCart.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload)
      }
      itemInCart && itemInCart.quantity--
    },
    removeItem: (state, action: Payload) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions

export default cartSlice.reducer

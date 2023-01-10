import React from 'react'
import { useAppSelector } from '../../store/hooks'

import CartItem from '../CartItem/CartItem'
import {
  CartInfoWrapper,
  CheckoutBtn,
  CheckoutText,
  CheckoutTotal,
  CloseButton,
} from './CartInfo.styles'

type CartProp = {
  closeFunc: () => void
}

function CartInfo({ closeFunc }: CartProp) {
  const cart = useAppSelector((state) => state.cart.cart)

  const total = cart.reduce((curr, prev) => {
    let sum = prev.quantity * prev.pricePerServing
    return Math.ceil(curr + sum)
  }, 0)

  return (
    <CartInfoWrapper>
      <CloseButton onClick={() => closeFunc()}>Close</CloseButton>
      {cart?.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}{' '}
      {cart.length !== 0 ? (
        <>
          <CheckoutTotal>Total: ${total}</CheckoutTotal>
          <CheckoutBtn to='checkout'>Checkout</CheckoutBtn>
        </>
      ) : (
        <CheckoutText>Cart is empty</CheckoutText>
      )}
    </CartInfoWrapper>
  )
}

export default CartInfo

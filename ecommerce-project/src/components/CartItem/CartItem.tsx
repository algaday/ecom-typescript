import React from 'react'
import {
  increaseQuantity,
  decreaseQuantity,
  Food,
} from '../../store/cartSlice/cartSlice'
import { useAppDispatch } from '../../store/hooks'
import {
  CartItemContainer,
  CartItemImage,
  CartItemPrice,
  CartItemQuantity,
  CartItemTitle,
  CartItemWrapper,
  CartDownArrow,
  CartItemQuantityContainer,
  CartUpArrow,
  LineBreak,
} from './CartItem.styles'

function CartItem({ image, title, pricePerServing, quantity, id }: Food) {
  const dispatch = useAppDispatch()

  return (
    <>
      <CartItemWrapper>
        <CartItemImage src={image} />
        <CartItemContainer>
          <CartItemTitle>{title}</CartItemTitle>
          <CartItemPrice>${pricePerServing}</CartItemPrice>
        </CartItemContainer>
        <CartItemQuantityContainer>
          <CartUpArrow onClick={() => dispatch(increaseQuantity(id))} />
          <CartItemQuantity>{quantity}</CartItemQuantity>
          <CartDownArrow onClick={() => dispatch(decreaseQuantity(id))} />
        </CartItemQuantityContainer>
      </CartItemWrapper>
      <LineBreak />
    </>
  )
}

export default CartItem

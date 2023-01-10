import React, { useState } from 'react'
import { Logout } from '../../firebase/firebase'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addUser } from '../../store/userSlice/userSlice'
import CartInfo from '../CartInfo/CartInfo'

import {
  IconsWrapper,
  ItemsAmount,
  ItemsAmountQuantity,
  ShoppingCart,
  ShoppingCartWrapper,
  SignInLink,
  UserDisplayname,
} from './Icons.styles'

function Icons() {
  const [show, setShow] = useState(false)

  const cart = useAppSelector((stete) => stete.cart.cart)
  const user = useAppSelector((stete) => stete.user.user)
  const dispatch = useAppDispatch()

  let amount = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  )

  const closeFunc = () => {
    setShow(false)
  }

  return (
    <>
      <IconsWrapper>
        <ShoppingCartWrapper onClick={() => setShow(!show)}>
          <ShoppingCart />
          <ItemsAmount amount={amount}>
            <ItemsAmountQuantity>{amount}</ItemsAmountQuantity>
          </ItemsAmount>
        </ShoppingCartWrapper>
        {show ? <CartInfo closeFunc={closeFunc} /> : null}

        {!user ? (
          <SignInLink to='/login'>Sign In</SignInLink>
        ) : (
          <UserDisplayname
            onClick={() => {
              Logout()
              dispatch(addUser(null))
            }}
          >
            {user.email}
          </UserDisplayname>
        )}
      </IconsWrapper>
    </>
  )
}

export default Icons

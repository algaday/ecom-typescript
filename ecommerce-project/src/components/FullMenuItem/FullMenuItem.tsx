import React from 'react'
import {
  MenuCardWrapper,
  MenuCardImg,
  MenuCardInfo,
  MenuCardTitle,
  MenuCardText,
  MenuCardButtonContainer,
  MenuCardPrice,
} from './FullMenuItem.styles'
import CustomButton from '../Button/CustomButton'
import { addToCart, Meal } from '../../store/cartSlice/cartSlice'
import { useAppDispatch } from '../../store/hooks'

function FullMenuItem(prop: Meal) {
  const { image, title, id, pricePerServing } = prop
  const dispatch = useAppDispatch()

  const roundPrice = Math.ceil(pricePerServing)
  const addToCartFunction = () => {
    dispatch(
      addToCart({
        id,
        image,
        title,
        pricePerServing: roundPrice,
      })
    )
  }

  return (
    <MenuCardWrapper>
      <MenuCardImg src={image} />
      <MenuCardInfo>
        <MenuCardTitle>{title}</MenuCardTitle>
        <MenuCardText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          atque! Porro, rem!
        </MenuCardText>
        <MenuCardButtonContainer>
          <MenuCardPrice>${roundPrice}</MenuCardPrice>
          <CustomButton text={'Add to Cart'} addCart={addToCartFunction} />
        </MenuCardButtonContainer>
      </MenuCardInfo>
    </MenuCardWrapper>
  )
}

export default FullMenuItem

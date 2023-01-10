import React from 'react'
import { addToCart, Meal } from '../../store/cartSlice/cartSlice'
import { useAppDispatch } from '../../store/hooks'
import CustomButton from '../Button/CustomButton'
import {
  FoodFooter,
  FoodImg,
  FoodImgWrapper,
  FoodInfoWrapper,
  FoodLorum,
  FoodPrice,
  FoodTitle,
  FoodWrapper,
} from './FoodCard.styles'

type FoodCardProps = {
  food: Meal
  cardStyle: string
}

function FoodCard({
  food: { image, title, id, pricePerServing },
  cardStyle,
}: FoodCardProps) {
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
    <FoodWrapper className={cardStyle}>
      <FoodImgWrapper>
        <FoodImg
          src={
            image ||
            'https://yandex.kz/images/search?text=food&pos=14&img_url=http%3A%2F%2Featthis.com%2Fwp-content%2Fuploads%2Fsites%2F4%2F2020%2F10%2Fhealthy-plate.jpg&rpt=simage&lr=162'
          }
        />
      </FoodImgWrapper>
      <FoodInfoWrapper>
        <FoodTitle>{title}</FoodTitle>
        <FoodLorum>
          Lorem ipsum dolor sit amet consecte adipisicing elit.
        </FoodLorum>
        <FoodFooter>
          <FoodPrice>${roundPrice}</FoodPrice>
          <CustomButton text={'Add to Cart'} addCart={addToCartFunction} />
        </FoodFooter>
      </FoodInfoWrapper>
    </FoodWrapper>
  )
}

export default FoodCard

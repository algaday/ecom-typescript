import React from 'react'
import { CardImg, CardText, CardTitle, CardWrapper } from './Cards.styles'

type CardProps = {
  card: {
    img: string
    title: string
    text: string
  }
}

function Cards({ card }: CardProps) {
  const { img, title, text } = card
  return (
    <CardWrapper>
      <CardImg src={img} />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardWrapper>
  )
}

export default Cards

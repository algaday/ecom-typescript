import React from 'react'
import { CustomButtonStyle } from './CustomButton.styles'

type TButtonProps = {
  text: string
  secondary?: boolean
  addCart: () => void
}

function CustomButton(props: TButtonProps) {
  const { text, secondary, addCart } = props

  return secondary ? (
    <CustomButtonStyle secondary onClick={() => addCart()}>
      {text}
    </CustomButtonStyle>
  ) : (
    <CustomButtonStyle onClick={() => addCart()}>{text}</CustomButtonStyle>
  )
}

export default CustomButton

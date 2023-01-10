import React from 'react'
import {
  ItemWrapper,
  ItemContainer,
  ItemHeader,
  ItemTitle,
  ItemIconPlus,
  ItemIconMinus,
  ItemModal,
  ModalText,
} from './AccordionItem.styles'

type AccordionProps = {
  text: string
  title: string
  onToggle: () => void
  active: boolean
}

function AccordionItem(props: AccordionProps) {
  const { text, title, onToggle, active } = props
  return (
    <ItemWrapper>
      <ItemContainer>
        <ItemHeader>
          <ItemTitle>{title}</ItemTitle>
          {active ? (
            <ItemIconMinus onClick={onToggle} />
          ) : (
            <ItemIconPlus onClick={onToggle} />
          )}
        </ItemHeader>
        <ItemModal>{active ? <ModalText>{text}</ModalText> : null}</ItemModal>
      </ItemContainer>
    </ItemWrapper>
  )
}

export default AccordionItem

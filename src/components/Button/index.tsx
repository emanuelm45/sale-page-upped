import { MouseEvent } from 'react'
import { ButtonContainer, ButtonContainerLight } from './style'

interface ButtonProps {
  children: string
  light?: boolean
}

const Button = (props: ButtonProps) => {
  return props.light ? (
    <ButtonContainerLight href="#home">{props.children}</ButtonContainerLight>
  ) : (
    <ButtonContainer href="#home">{props.children}</ButtonContainer>
  )
}

export { Button }

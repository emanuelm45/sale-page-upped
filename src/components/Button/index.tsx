import { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent } from 'react'
import { ButtonContainer, ButtonContainerLight } from './style'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string
  light?: boolean
}

const Button = (props: ButtonProps) => {
  return props.light ? (
    <ButtonContainerLight
      href="#home"
      {...props}
    >
      {props.children}
    </ButtonContainerLight>
  ) : (
    <ButtonContainer
      href="#home"
      {...props}
    >
      {props.children}
    </ButtonContainer>
  )
}

export { Button }

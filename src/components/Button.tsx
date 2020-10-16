import React from 'react'
import { styled } from '../styles/theme';

interface IButtonProps {
  readonly primary?: boolean
  readonly block?: boolean
  readonly inactive?: boolean
  readonly filled?: boolean
  readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledButton = styled.button<IButtonProps>`
  padding: 1em 2em;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  // This makes button round on edges
  border-radius: 9999px;
  border: 2px solid ${props => props.primary ? props.theme.button.color.primary :  props.theme.button.color.default};
  display: ${props => props.block ? 'block' : 'inline-block'};
  background-color: ${props => {
    if (!props.filled) {
      return 'transparent'
    }
    if (props.primary) {
      return props.theme.button.color.primary
    }
    return props.theme.button.color.default
  }};
  color: ${props => {
    if (props.inactive) {
      return props.theme.button.color.inactive
    }
    if (props.primary) {
      if (props.filled) {
        return props.theme.button.color.default
      } else {
        return props.theme.button.color.primary
      }
    }
    return props.theme.button.color.default
  }};
`

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return <StyledButton {...props} />
}

export default Button

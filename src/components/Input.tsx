import React from 'react'
import { styled } from '../styles/theme'
import { StyledButton } from './Button'

const StyledInput = styled.input`
  line-height: 1;
  background-color: transparent;

  border: none;
  outline: none;
  box-shadow: none;

  &:active,
  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
`
const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  transition: all 0.15s ease-in-out;
  height: 3em;
  border-radius: 9999px;
  padding: 5px;
  background-color: white;

  box-shadow: 0 0 2px ${(p) => p.theme.text.default};

  &:focus-within {
    box-shadow: 0 0 2px ${(p) => p.theme.text.active};
  }

  /* Make buttons inside the input box a little more toward inside */
  /* For sake of this test case we expect that button is always last item (only usecase here is that one subscribe button so yeah) */
  & ${StyledButton} {
    height: 100%;
    flex: 1 1 auto;
  }

  & ${StyledInput} {
    flex: 1 1 auto;
    margin-left: 1.5em;
  }
`

interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <StyledInputWrapper {...props}>
      <StyledInput onChange={props.onChange} placeholder={props.placeholder}/>
      {props.children}
    </StyledInputWrapper>
  )
}

export default Input

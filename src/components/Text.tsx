import React from 'react'
import { styled } from '../styles/theme'

interface TextProps {
  block?: boolean
  className?: string
}
const BaseText: React.FC<TextProps> = (props) => {
  if (props.block) {
    return <div className={props.className}>{props.children}</div>
  }
  return <span className={props.className}>{props.children}</span>
}

interface StyledTextProps extends TextProps {
  color: 'sub' | 'active' | 'default' | 'inactive' | 'inherit'
}

const Text = styled(BaseText).attrs<StyledTextProps>((props) => ({
  block: props.block,
}))<Partial<StyledTextProps>>`
  line-height: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: ${(props) => {
    if (!props.color) return 'inherit'
    return props.theme.text[props.color]
  }};
`

export default Text

import React from 'react'
import { styled } from '../styles/theme'

interface HeadingProps {
  level: 1 | 2 | 3 | 4
  className?: string
}

// Div is temp here
const StyledHeading = styled.h1<HeadingProps>`
  color: inherit;
  /* level 1 and 2 has more space around */
  line-height: ${p => p.level < 3 ? 2 : 1.5};
  font-size: ${p => p.theme.headings[p.level]};
  margin: ${p => {
    if (p.level < 3) {
      return '1em 0 0.5em'
    } else {
      return '0.5em 0'
    }
  }};
`

const Heading: React.FC<HeadingProps> = (props) => {
  return (
    // @ts-ignore don't know how to handle this case, really no clue
    <StyledHeading as={`h${props.level}`} level={props.level} className={props.className}>
      {props.children}
    </StyledHeading>
  )
}

export default Heading

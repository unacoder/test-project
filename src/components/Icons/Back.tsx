import React from 'react'

import { styled } from '../../styles/theme'

interface BackProps {
  className?: string
  right?: boolean
}

const BackSVG = (props: BackProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 477.175 477.175"
    className={props.className}
  >
    <defs />
    <path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z" />
  </svg>
)

export default styled(BackSVG)<BackProps>`
  fill: currentColor;
  height: 1em;
  vertical-align: middle;
  transform: scale(0.9) ${props => props.right ? 'rotate(180deg)' : ''};
  margin-right: ${props => props.right ? '0' : '0.5em'};
  margin-left: ${props => props.right ? '0.5em' : '0'};
`

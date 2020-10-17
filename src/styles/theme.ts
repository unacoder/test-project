import baseStyled, { ThemedStyledInterface } from 'styled-components'

const theme = {
  background: 'white',
  button: {
    color: {
      default: 'white',
      primary: '#3b2eb2',
      inactive: '#94a1ac'
    },
  },
  text: {
    default: '#293039',
    body: '#c4c9cc',
    sub: '#94a1ac',
    active: '#3b2eb2',
    inactive: '#666666',
    header: 'white',
  },
  headings: {
    size: [36, 24, 18, 14]
  }

} as const

export default theme

type Theme = typeof theme

export const styled = baseStyled as ThemedStyledInterface<Theme>;

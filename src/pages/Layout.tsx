import React from 'react'
import { styled } from '../styles/theme'
import Footer from './Footer'
import Header from './Header'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`

const StyledHeader = styled(Header)`
  flex: 0 0 auto;
`

const StyledFooter = styled(Footer)`
  flex: 0 0 auto;
`

const Content = styled.div`
  width: 100%;
  color: ${(props) => props.theme.text.default};
  flex: 1 1 auto;
`

const Layout: React.FC = (props) => {
  return (
    <StyledLayout>
      <StyledHeader />
      <Content>{props.children}</Content>
      <StyledFooter />
    </StyledLayout>
  )
}

export default Layout

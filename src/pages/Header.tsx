import React from 'react'
import Button from '../components/Button'
import Heading from '../components/Heading'
import {
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderLogo,
  StyledHeaderNav,
  StyledHeaderNavItem,
  StyledHeaderTitle,
} from './StyledHeader'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <StyledHeader className={props.className}>
      <StyledHeaderContent>
        <StyledHeaderNav>
          <StyledHeaderNavItem flexible>
            <StyledHeaderLogo src={`${process.env.PUBLIC_URL}/logo.png`} />
          </StyledHeaderNavItem>
          <StyledHeaderNavItem>Home</StyledHeaderNavItem>
          <StyledHeaderNavItem>About</StyledHeaderNavItem>
          <StyledHeaderNavItem>Screen</StyledHeaderNavItem>
          <StyledHeaderNavItem>Contact</StyledHeaderNavItem>
          <StyledHeaderNavItem>
            <Button>Create Account</Button>
          </StyledHeaderNavItem>
        </StyledHeaderNav>
        <StyledHeaderTitle>
          <Heading level={1}>Our Blog</Heading>
          <Heading level={4}>Home - Blog</Heading>
        </StyledHeaderTitle>
      </StyledHeaderContent>
    </StyledHeader>
  )
}

export default Header

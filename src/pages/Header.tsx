import React from 'react'
import Button from '../components/Button'
import {
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderLogo,
  StyledHeaderNav,
  StyledHeaderNavItem,
  StyledHeaderTitle,
  StyledHeaderTitleBot,
  StyledHeaderTitleTop,
} from './StyledHeader'

const Header: React.FC = (props) => {
  return (
    <StyledHeader>
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
          <StyledHeaderTitleTop>Our Blog</StyledHeaderTitleTop>
          <StyledHeaderTitleBot>
            Home - Blog
          </StyledHeaderTitleBot>
        </StyledHeaderTitle>
      </StyledHeaderContent>
    </StyledHeader>
  )
}

export default Header

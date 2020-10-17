import React from 'react'
import Button from '../components/Button'
import Heading from '../components/Heading'
import Back from '../components/Icons/Back'
import Text from '../components/Text'
import {
  StyledFooter,
  StyledFooterBottom,
  StyledFooterBotWrapper,
  StyledFooterCircle,
  StyledFooterCircles,
  StyledFooterNavItem,
  StyledFooterSubInput,
  StyledFooterSubscribe,
} from './StyledFooter'

interface FooterProps {
  className?: string
}

const FancyFooterCircles = () => {
  return (
    <StyledFooterCircles>
      <StyledFooterCircle />
      <StyledFooterCircle />
      <StyledFooterCircle />
      <StyledFooterCircle />
      <StyledFooterCircle />
      <StyledFooterCircle />
    </StyledFooterCircles>
  )
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <StyledFooter className={props.className}>
      <FancyFooterCircles />
      <StyledFooterSubscribe>
        <Heading level={1}>Subscribe Our Newsletter</Heading>
        <Text block>
          Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio
        </Text>
        <Text block>
          tincidunt maximus. Pellentesque tempus gravida viverra.
        </Text>
        <StyledFooterSubInput placeholder="Enter Email Address">
          <Button primary filled>
            Subscribe
            <Back right />
          </Button>
        </StyledFooterSubInput>
      </StyledFooterSubscribe>
      <StyledFooterBotWrapper>
        <StyledFooterBottom>
          <StyledFooterNavItem flexible>
            <Text color="sub">
              Designed by GoldeLayers | Powered by WordPress
            </Text>
          </StyledFooterNavItem>
          <StyledFooterNavItem>Home</StyledFooterNavItem>
          <StyledFooterNavItem>About Us</StyledFooterNavItem>
          <StyledFooterNavItem>Pages</StyledFooterNavItem>
          <StyledFooterNavItem>Gallery</StyledFooterNavItem>
          <StyledFooterNavItem>Blog</StyledFooterNavItem>
          <StyledFooterNavItem>Contact</StyledFooterNavItem>
        </StyledFooterBottom>
      </StyledFooterBotWrapper>
    </StyledFooter>
  )
}

export default Footer

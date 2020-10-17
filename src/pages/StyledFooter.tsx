import React from 'react'
import Input from '../components/Input'

import {styled} from '../styles/theme'

export const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  font-weight: 600;
  color: ${(props) => props.theme.text.header};
  /* just for testing purposes, can remove later on */
  min-height: 100px;
  background: linear-gradient(120deg, #c96dd7 0%, #2f23ad 100%);
`

export const StyledFooterCircles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  z-index: 0;
`

// These numbers calculated in a matter that 6 circles shown from 20 window width behind the screen to 20 window width
// after it, each one is 40 window width, which results in the shiny glowing circles shown in the design file created
// by ${INSERT_NAME_HERE}.
export const StyledFooterCircle = styled.div`
  width: 40vw;
  height: 40vw;
  background-color: white;
  opacity: 0.03;
  border-radius: 50%;
  display: block;
  float: left;
  margin-left: -20vw;
  margin-top: -20vw;
  margin-right: 0;
  margin-bottom: 0;
  &:last-of-type {
    margin-right: -20vw;
  }
`

export const StyledFooterSubscribe = styled.div`
  padding: 160px 0;
  text-align: center;

  /* circles get in the way when trying to clicking on this parts, so move it a bit to front */
  z-index: 1;
  position: relative;
`

export const StyledFooterSubInput = styled(Input)`
  width: 600px;
  /* Some space from top and center it */
  margin: 70px auto 0;
`

export const StyledFooterBotWrapper = styled.div`
  background-color: rgba(0,0,0,0.07);
  padding: 30px 0;
`

export const StyledFooterBottom = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
`

interface StyledFooterNavItemProps {
  flexible?: boolean
}
export const StyledFooterNavItem = styled.div<StyledFooterNavItemProps>`
  flex: ${(props) => (props.flexible ? '1 1' : '0 0')} auto;
  font-size: 14px;
  margin: 0 1em;
  &::first-of-type {
    margin-left: 0;
  }
  &::last-of-type {
    margin-right: 0;
  }
`

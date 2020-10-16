import React from 'react'
import { styled } from '../styles/theme'

export const StyledHeader = styled.div`
  width: 100%;
  height: auto;
  font-weight: 600;
  color: ${(props) => props.theme.text.header};
  /* just for testing purposes, can remove later on */
  min-height: 100px;
  background: linear-gradient(120deg, #c96dd7 0%, #2f23ad 100%);
`

export const StyledHeaderContent = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 35px 0;
`

export const StyledHeaderNav = styled.div`
  display: flex;
  align-items: center;
`
export const StyledHeaderLogo = styled.img``

interface StyledHeaderNavItemProps {
  flexible?: boolean
}
export const StyledHeaderNavItem = styled.div<StyledHeaderNavItemProps>`
  flex: ${(props) => (props.flexible ? '1 1' : '0 0')} auto;
  font-size: 18px;
  margin: 0 1em;
  &::first-of-type {
    margin-left: 0;
  }
  &::last-of-type {
    margin-right: 0;
  }
`

export const StyledHeaderTitle = styled.div`
  padding: 100px 0;
  text-align: center;
`

export const StyledHeaderTitleTop = styled.h1`
  font-size: 36px;
`

export const StyledHeaderTitleBot = styled.h4`
  font-size: 14px;
`

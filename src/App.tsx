import React, { useEffect, useState } from "react"
import logo from "./logo.svg"
import styled, { keyframes } from "styled-components/macro"
import { fetchAll } from './api/article'

const StyledApp = styled.div`
  text-align: center;
`

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const StyledLink = styled.a`
  color: #61dafb;
`

const KeyframesLogo = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${KeyframesLogo} infinite 20s linear;
  }
`

export default function App() {
  const [articles, setArticls] = useState([])

  useEffect(() => {
    fetchAll().then((data) => setArticls(data))
  }, [])

  return (
    <StyledApp>
      <StyledHeader>
        <StyledLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <StyledLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </StyledLink>
      </StyledHeader>
    </StyledApp>
  )
}

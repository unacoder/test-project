import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}


export default Layout

import React from 'react'
import Navbar from '../components/Navbar'
import MenuMobile from '../components/MenuMobile'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <MenuMobile />
      {children}
    </>
  )
}

export default Layout
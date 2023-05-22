import React from 'react'
import Navbar from '../components/Navbar'
import MenuMobile from '../components/MenuMobile'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <MenuMobile />
      {children}
    </div>
  )
}

export default Layout
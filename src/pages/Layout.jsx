import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarWithBurgerMenu } from '../components/Sidebar'

const Layout = () => {
  return (
    <div>
      <SidebarWithBurgerMenu/>
      <Outlet />
    </div>
  )
}

export default Layout
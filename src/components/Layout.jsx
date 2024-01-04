import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderTwo from './HeaderTwo'

const Layout = () => {
  return (
    <>
        <HeaderTwo/>
        <Outlet/>
        
    </>
  )
}

export default Layout
import React from 'react'

import { Outlet } from 'react-router-dom'

import HeaderMain from './HeaderMain'

const LayoutMain = () => {
  return (
    <>
        <HeaderMain/>
        <Outlet/>

    </>
  )
}

export default LayoutMain
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import SearchExercises from './SearchExercises'


const HeaderMain = () => {
  return (
    <header className='header-main'>
        <nav className='navMain'>
          <Link to='/'>Home</Link>
          <Link to='/exercises'>Exercises</Link>
        </nav>    
    </header>
  )
}

export default HeaderMain
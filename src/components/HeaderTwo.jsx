import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import SearchExercises from './SearchExercises'
import { Context } from '../App'
import { handleLogout } from '../pages/Login'



const HeaderTwo = () => {
  const {showAddExercise, setShowAddExercise} = useContext(Context);
  const [user, setUser] = useState();
 
  function refresh() {
    setUser(sessionStorage.getItem('userId'));

  }

  useEffect(() => {
    setTimeout(refresh, 300)
    

  })
  
  
  
  return (


    <>
    {showAddExercise == false &&
      <header className='header-two'>
        <nav className='navTwo'>
          <div className='nav1'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/exercises'>Exercises</Link>
            <Link className='link' to='/favourites'>Favourites</Link>
            <Link className='link' to='/myworkoutsplit'>My Workout Split</Link>
          </div>
          {/* 
          <div className='nav2'>
            <p>{user}</p>
            {!user ? 
              <>
              <Link className='link' to='/login'>Login</Link>
              <Link className='link' to='/register'>Register</Link>
              </>
            : <p className='link' onClick={handleLogout}>Logout</p>}
          </div>
          */}
        </nav>    
      </header>
    }
    </>
  )
}

export default HeaderTwo
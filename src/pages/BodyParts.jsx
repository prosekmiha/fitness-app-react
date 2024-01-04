import React, { useEffect, useState } from 'react'
import {data} from '../data/exercises.js'
import { Link, Outlet } from 'react-router-dom';
import BodyPart from './BodyPart.jsx';

const BodyParts = () => {
    const [exercises, setExercises] = useState(data);


  return ( 
    <div>
      <div>
          <Link to={'chest'}>Chest</Link>
          <Link to={'shoulders'}>Shoulders</Link>
          <Link to={'arms'}>Arms</Link>
          <Link to={'legs'}>Legs</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>    
    
  )
}

export default BodyParts
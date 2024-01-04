import React from 'react'
import hero from '../assets/photo/hero.png'
import SearchExercises from '../components/SearchExercises'
import { Link } from 'react-router-dom'
import HeaderMain from '../components/HeaderMain'
import SearchExercisesHome from '../components/SearchExercisesHome'

const HomePage = () => {
  return (
    <>

    <div>
        <div className='hero-container'>
            <div className='hero-left'>
                <h1>{"GET YOUR \nBODY IN \nSHAPE"}</h1>
                <h2>WORKOUT IS KEY TO SUCCESS OF LIFE</h2>
                <Link to={'/exercises'}><button>Exercises</button></Link>
            </div>
            <div className='hero-right'>
                <img src={hero}/>
            </div>
            
        </div>
        <SearchExercisesHome/>
    </div>
    </>
  )
}

export default HomePage
import React, { useEffect, useContext, useState } from 'react'
import images from '../data/images.js'
import { Context } from '../App'
import { Link } from 'react-router-dom'
import ExerciseItem from './ExerciseItem.jsx'
import Exercise from '../pages/Exercise.jsx'



const Favourites = () => {
    const {favourites, setFavourites} = useContext(Context)
    const {showAddExercise, setShowAddExercise} = useContext(Context);
    useEffect(() => {
        setShowAddExercise(false);
    })
    useEffect(() => {
        setFavourites(JSON.parse(localStorage.getItem("favourites")));
        console.log(favourites)
    }, [])
    

  return (
    <div className='favourite-exercises-container'>   
        <div className='favourite-exercises'>
            {favourites != "" &&
                favourites.map((exercise) => {
                    return (                             
                        <Link to={`${exercise.name}`} element={<Exercise/>} key={exercise.id}>
                            <ExerciseItem exercise={exercise} images={images} key={exercise.id}/>
                        </Link>           
                    )
                })
            }
        </div>   
        {favourites == "" ? <h3>You don't have any favourite exercises added.</h3> : <button onClick={() => setFavourites("")}>Delete all exercises</button>}      
    </div>
  )
}

export default Favourites
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExerciseItem from './ExerciseItem'
import Exercise from '../pages/Exercise'
import images from '../data/images.js'

const ExercisesSearchResults = ({ exercises }) => {
  const [nmbOfExercises, setNmbOfExercises] = useState(12)
  return (
    <div>
        <div className='exercises'>
            {exercises.filter((item, index) => index < nmbOfExercises).map(exercise => {
                return (
                    <Link to={`${exercise.name}`} element={<Exercise/>} key={exercise.id}>
                        <ExerciseItem exercise={exercise} images={images}/>
                    </Link>
                )
            })}
        </div>
        <div className='show-more-container'>
            <button className='show-more-btn' onClick={() => setNmbOfExercises(nmbOfExercises + 8)}>Show More</button>
        </div>
    </div>
  )
}

export default ExercisesSearchResults
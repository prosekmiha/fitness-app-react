import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Exercise from '../pages/Exercise'
import ExerciseItem from './ExerciseItem'
import images from '../data/images.js'
import { Context } from '../App'

const HorizontalScrollbar = () => {
    const {exercises, setExercises} = useContext(Context);
    const [nmbOfExercises, setNmbOfExercises] = useState(12)


  return (
    <div className='horizontal-scrollbar-container'>
        {exercises.filter((item, index) => index < nmbOfExercises).map(exercise => {
                return (               
                    <Link to={`/exercises/${exercise.name}`} element={<Exercise/>} key={exercise.id}>
                        <ExerciseItem exercise={exercise} images={images} key={exercise.id}/>
                    </Link>               
                )
            })}
    </div>
  )
}

export default HorizontalScrollbar
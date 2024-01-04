import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {data} from '../data/exercises.js'
import images from '../data/images.js'
import Exercise from './Exercise.jsx'
import ExerciseItem from '../components/ExerciseItem.jsx'


const BodyPart = ({bodyPart}) => {
    const [exercises, setExercises] = useState(data);
    const exercisesFilter = exercises.filter((exercise) => exercise.bodyPart.toLowerCase().includes(bodyPart))

  return (
    <>
        <div className='exercises'>
            {exercisesFilter.map(exercise => {
                return (
                    <Link to={`${exercise.name}`} element={<Exercise/>} key={exercise.id}>
                        <ExerciseItem exercise={exercise} images={images}/>
                    </Link>
                )
            })}
        </div>
    </>
  )
}

export default BodyPart
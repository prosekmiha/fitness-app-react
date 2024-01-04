import React, { useContext, useEffect, useState } from 'react'
import WorkoutSplit from '../components/WorkoutSplit';
import AddExercise from '../components/AddExercise';
import { Context } from '../App'


const MyWorkoutSplits = () => {

    
    const [splits, setSplits] = useState();
    const {showAddExercise, setShowAddExercise} = useContext(Context)
  return (
    <>
    {showAddExercise && <AddExercise/>}
    <div className='myworkoutsplit-container'>
        <WorkoutSplit/>
    </div>
    </>
  )
}

export default MyWorkoutSplits
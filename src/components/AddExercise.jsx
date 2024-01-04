import React, { useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Exercises from '../pages/Exercises';
import { Context } from '../App'
const AddExercise = () => {
    
    const {showAddExercise, setShowAddExercise} = useContext(Context)


  return (
    <div className='addExercise-container'>
        <CloseIcon fontSize='large' className='closeIcon' onClick={() => setShowAddExercise(!showAddExercise)}/>
        <Exercises/>
    </div>
  )
}

export default AddExercise
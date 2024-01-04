import React, { useState, useContext, useEffect } from 'react'
import Exercises from '../pages/Exercises';
import { Link } from 'react-router-dom';
import { Context } from '../App'
import { workoutSplits } from '../data/workoutSplits';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const WorkoutSplit = () => {
    let workoutSplit = JSON.parse(localStorage.getItem('split'));

    const {showAddExercise, setShowAddExercise} = useContext(Context);
    const [split, setSplit] = useState(workoutSplit);
    const {addExerciseName, setAddExerciseName} = useContext(Context);

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


    const addBtns = [];
    const [dayId, setDayId] = useState();
    for (let i = 0; i < 7; i++) {
        addBtns.push(<button id={i} onClick={(e) => {addExerciseBtnClicked(); setDayId(e.target.id); sessionStorage.setItem('dayId', e.target.id)}}>Add workout</button>);
    }

    const {isExerciseAdded, setIsExerciseAdded} = useContext(Context);

    function addExerciseBtnClicked() {
        setShowAddExercise(!showAddExercise);
    }

    function exerciseAdd() {
        let id = sessionStorage.getItem('dayId')
        setDayId(id);
        let copy = [...split];
        console.log(dayId)
        copy[id][copy[id].length] = addExerciseName;
        setSplit(copy)
        localStorage.setItem('split', JSON.stringify(copy))
        setIsExerciseAdded(!isExerciseAdded)

    }
    useEffect(() => {
        
        
        isExerciseAdded && exerciseAdd();
    })

    const deleteExerciseFromSplit = name => {

    }
    
    function deleteAll() {
        localStorage.setItem('split', JSON.stringify([[], [], [], [], [], [], []]));
        setSplit([[], [], [], [], [], [], []]);
    }
    

  return (
    <div className='workoutSplit-container'>
        <button className='deleteAllBtn' onClick={() => deleteAll()}>Delete all</button>
        <div className='workoutSplit-days'>
            {days.map(day => (<div className='workoutSplit-day'>{day}</div>))}         
        </div>
        <div className='workoutSplit-table'>
            {split.map((spli) => {
                return(
                    <div className='workoutSplit-table-td'>
                        {spli.map(x => <div className='workoutSplit-table-tr'>
                            <Link to={`/exercises/${x}`}>{x.toLocaleUpperCase().charAt(0) + x.slice(1)}</Link>
                            <div title="Not working yet">
                                <DeleteForeverIcon className='deleteIcon' fontSize='medium' onClick={(e) => deleteExerciseFromSplit()}/>
                            </div>
                            </div>)}
                        
                    </div>
                )
            }    
            )}
            
        </div> 
        <div className='workoutSplit-addBtns'>
            {addBtns.map(btn => (<div className='workoutSplit-addBtn'>{btn}</div>))}     
        </div>
    </div>
  )
}

export default WorkoutSplit

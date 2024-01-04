import React, { useContext, useEffect, useState, useRef } from 'react'
import { data } from '../data/exercises.js'
import images from '../data/images.js'
import { Link } from 'react-router-dom';
import ExerciseItem from '../components/ExerciseItem.jsx';
import Exercise from './Exercise.jsx';
import SearchExercises from '../components/SearchExercises.jsx';
import { Context } from '../App.jsx'
import autoAnimate from '@formkit/auto-animate'


const Exercises = () => {



    const {exercises, setExercises} = useContext(Context);
    const [selectedItem, setSelectedItem] = useState("All");
    const {filteredItems, setFilteredItems} = useContext(Context);
    const [nmbOfExercises, setNmbOfExercises] = useState(12)

    const [btnPressed, setBtnPressed] = useState(true);
    
    

    let bodyPartFilters = ["All", "Arms", "Chest", "Back", "Shoulders", "Legs", "Waist", "Cardio"];
    let equipmentFilters = ["All", "Body Weight", "Dumbbell", "Cable", "Barbell", "Band", "Wheel Roller", "Medicine Ball", "Kettlebell"];
    //const exercisesFilter = exercises.filter((exercise) => exercise.bodyPart.toLowerCase().includes(bodyPart))

    const handleFilterClick = (filter) => {   
        setSelectedItem(filter)  
        
        if(filter == "All") {
            setFilteredItems(exercises)
        } else {
            setFilteredItems(exercises.filter((exercise) => exercise.bodyPart.includes(filter.toLowerCase()) || exercise.equipment.includes(filter.toLowerCase())
            ))
        }
        if(btnPressed == false) {
            setBtnPressed(true);
        }
        
    }


    const [showBodypartFilterMenu, setShowBodypartFilterMenu] = useState(false);
    const [showEqFilterMenu, setShowEqFilterMenu] = useState(false);

    const parentRef = useRef(null)

    useEffect(() => {
        if (parentRef.current) {
        autoAnimate(parentRef.current);   
        }
    }, [parentRef])
  return (
    <>

    <div className='exercises-container'>
        <div className='filter-container'>
            <div>
                
                <button onClick={() => setShowBodypartFilterMenu(!showBodypartFilterMenu)} className='filter-btn'>Filter by Body Part</button>
                {showBodypartFilterMenu &&
                    <div className='filter-popup filter-popup1'> 
                        {bodyPartFilters.map(filter => (
                            <button onClick={() => {handleFilterClick(filter), setNmbOfExercises(12), setShowBodypartFilterMenu(!showBodypartFilterMenu)}} key={filter} className={`filter-button`}>{filter}</button>
                        ))}
                    </div>
                }
                <button onClick={() => setShowEqFilterMenu(!showEqFilterMenu)} className='filter-btn'>Filter by Equipment</button>
                {showEqFilterMenu &&
                    <div className='filter-popup filter-popup2'> 
                        {equipmentFilters.map(filter => (
                            <button onClick={() => {handleFilterClick(filter), setNmbOfExercises(12), setShowEqFilterMenu(!showEqFilterMenu)}} key={filter} className={`filter-button`}>{filter}</button>
                        ))}
                    </div>
                }
                <button onClick={() => handleFilterClick('All')} className='filter-btn'>All exercises</button>

            </div>
            

            <SearchExercises/>
        </div>
        <div className='exercises' ref={parentRef}>
            {
            filteredItems.filter((item, index) => index < nmbOfExercises).map(exercise => {
                return (
                    <Link to={`/exercises/${exercise.name}`} element={<Exercise/>} key={exercise.id}>
                        <ExerciseItem exercise={exercise} images={images} key={exercise.id}/>
                    </Link>          
                )
            })
            }
        </div>
        <div className='show-more-container'>
            <button className='show-more-btn' onClick={() => setNmbOfExercises(nmbOfExercises + 8)}>Show More</button>
        </div>
    </div>

    </>
  )
}

export default Exercises
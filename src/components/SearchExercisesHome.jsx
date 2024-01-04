import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../App'



const SearchExercisesHome = () => {
    const [search, setSearch] = useState();
    const {exercises, setExercises} = useContext(Context);
    const navigate = useNavigate();


    const {filteredItems, setFilteredItems} = useContext(Context);

    const handleSearch = async () => {
      
        if(search) {

            const searchedExercises = exercises.filter(
              (exercise) => exercise.name.toLowerCase().includes(search)
              || exercise.target.toLowerCase().includes(search)
              || exercise.equipment.toLowerCase().includes(search)
              || exercise.bodyPart.toLowerCase().includes(search)
              
            );

            setSearch('');
            setFilteredItems(searchedExercises);
              
        }
    }
  
    function onKeyDown(e) {
      if(e.keyCode === 13) {
        handleSearch();
        navigate("/exercises");
      }
    }

  return (
    <div className='search-div-home'>
        <h1>Find your favourite exercise</h1>
        <div>
            <input className='search-input-home' value={search} onKeyDown={(e) => onKeyDown(e)} onChange={(e) => {setSearch(e.target.value.toLowerCase())}} placeholder='Search Exercises' type='text' name='search' />
            <Link to='/exercises'>
                <button className='search-btn-home' onClick={handleSearch}>Search</button>
            </Link>
        </div>
      
    </div>
  )
}

export default SearchExercisesHome
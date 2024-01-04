import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App'



const SearchExercises = () => {
    const [search, setSearch] = useState();

    const {exercises, setExercises} = useContext(Context);



    const {filteredItems, setFilteredItems} = useContext(Context);

    useEffect(() => {
      handleSearch();
    }, [search])

    const handleSearch = async () => {
      
        if(search) {

            const searchedExercises = exercises.filter(
              (exercise) => exercise.name.toLowerCase().includes(search)
              || exercise.target.toLowerCase().includes(search)
              || exercise.equipment.toLowerCase().includes(search)
              || exercise.bodyPart.toLowerCase().includes(search)
              
            );

            
            setFilteredItems(searchedExercises);

        }
    }

  return (
    <div className='search-div'>
      <input className='search-input' value={search} onChange={(e) => {setSearch(e.target.value.toLowerCase())}} placeholder='Search Exercises' type='text' name='search' />
    </div>
  )
}

export default SearchExercises
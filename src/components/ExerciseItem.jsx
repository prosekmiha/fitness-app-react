import React, { useContext, useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Context } from "../App"
import Axios from 'axios'


const ExerciseItem = ({exercise, images}) => {
  
  const {favourites, setFavourites} = useContext(Context);
  const {showAddExercise, setShowAddExercise} = useContext(Context);
  const [fav, setFav] = useState(true);
  const [user, setUser] = useState(sessionStorage.getItem('userId'));
  const [neki, setNeki] = useState(0)

  function handleFavClick(exercise) {
    setFav(!fav)
    setFavourites([...favourites, exercise])
    
    //insertSQLFavourites()
    
  }

  useEffect(()=>{
    console.log(favourites)
   
  })

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites))
  }, [favourites])
  
  function handleUnFavClick(exercise) {
    setFav(!fav)
    setFavourites(favourites.filter((exe) => exe.id !== exercise.id));
    
  }


  const {addExerciseName, setAddExerciseName} = useContext(Context);
  const {isExerciseAdded, setIsExerciseAdded} = useContext(Context);

  function addExercise(name) {
    setAddExerciseName(name);
    setIsExerciseAdded(!isExerciseAdded);
    setShowAddExercise(!showAddExercise);

  }


  function insertSQLFavourites() {
    
    Axios.post('http://localhost:3001/insertfavourites', {
        favourites: favourites, 
        username: user,
    }).then((response) => {
        console.log(response)
    })
}
  

  return (
    <>
    <div className='exercise-item' key={exercise.id}>
      <div>
        <div className='equipment-target'>
          <div className='equipment'>{exercise.equipment.toLocaleUpperCase().charAt(0) + exercise.equipment.slice(1)}</div>
          <div className='target'>{exercise.target.toLocaleUpperCase().charAt(0) + exercise.target.slice(1)}</div>
        </div>
        {favourites != "" &&
          favourites.find((exe) => exe.id == exercise.id) ? 
            <FavoriteIcon fontSize='medium' className='fav-icon' onClick={(e) => {e.preventDefault(); handleUnFavClick(exercise)}}/> :
            <FavoriteBorderIcon fontSize='medium' onClick={(e) => {e.preventDefault(); handleFavClick(exercise); }} className='fav-border-icon'/> 
        }
      </div>
      <img src={images['gif' + exercise.id]}/>   
      <div>
        <p>{exercise.name.toLocaleUpperCase().charAt(0) + exercise.name.slice(1)}</p>
        {showAddExercise && <button className='addExerciseBtn' onClick={(e) => {e.preventDefault(); addExercise(exercise.name)}}>Add exercise</button>}
      </div>
      
     
      

    </div>
    
    </>
  )
}

export default ExerciseItem
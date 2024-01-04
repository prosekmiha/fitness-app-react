import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/exercises.js'
import images from '../data/images.js'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Context } from '../App.jsx'
import HorizontalScrollbar from '../components/HorizontalScrollbar.jsx';

const Exercise = () => {

  const params = useParams();

  

  const {exercises, setExercises} = useContext(Context);
  const exe = exercises.filter((exercise) => exercise.name.includes(params.exerciseName));
  const [exercise, setExe] = useState(exe[0]);

  function insertSpace(text) {
    let text2 = "";
    for(let x = 0; x < text.length; x++){    
      text[x] == "." ? text2 = text2 + text[x] + " " : text2 = text2 + text[x];
    }
    
    return text2
  }
  
  const {favourites, setFavourites} = useContext(Context);

  const [fav, setFav] = useState(true);

  function handleFavClick(exercise) {
    setFav(!fav)
    setFavourites([...favourites, exercise])
  }

  function handleUnFavClick(exercise) {
    setFav(!fav)
    setFavourites(favourites.filter((exe) => exe.id !== exercise.id));
  }

  return (
    <>
    <div className='exercise'>
      <div className='exercise-left'>
        <img src = {images['gif' + exercise.id]} />
      </div>
      <div className='exercise-right'>
        <div>
          <div className='equipment-target'>
            <div className='equipment'>{exercise.equipment.toLocaleUpperCase().charAt(0) + exercise.equipment.slice(1)}</div>
            <div className='target'>{exercise.target.toLocaleUpperCase().charAt(0) + exercise.target.slice(1)}</div>           
          </div>
          {favourites != "" &&
            favourites.find((exe) => exe.id == exercise.id) ? 
              <FavoriteIcon fontSize='large' className='fav-icon' onClick={(e) => {e.preventDefault(); handleUnFavClick(exercise)}}/> :
              <FavoriteBorderIcon fontSize='large' onClick={(e) => {e.preventDefault(); handleFavClick(exercise); }} className='fav-border-icon'/>          
          }
        </div>
        <div className="exercise-right-text">
          <h1>{exercise.name.toLocaleUpperCase().charAt(0) + exercise.name.slice(1)}</h1>   
          <p>{insertSpace(exercise.instructions)}</p>
        </div>

      </div>

      

    </div>

    </>
  )
}

export default Exercise
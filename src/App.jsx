import React, { useState, useEffect, createContext } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout' 
import Exercises from './pages/Exercises'
import Exercise from './pages/Exercise'
import HomePage from './pages/HomePage'
import LayoutMain from './components/LayoutMain'
import Favourites from './components/Favourites'
import Login from './pages/Login'
import Register from './pages/Register'
import { data } from './data/exercises'
import MyWorkoutSplits from './pages/MyWorkoutSplits'
import { Logout } from '@mui/icons-material'



export const Context = createContext();


function App() {


  const [exercises, setExercises] = useState(data);
  const [favourites, setFavourites] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data);
  const [showAddExercise, setShowAddExercise] = useState(false);
  const [addExerciseName, setAddExerciseName] = useState();
  const [isExerciseAdded, setIsExerciseAdded] = useState(false);


  useEffect(() => {
    localStorage.getItem('split') === null && localStorage.setItem('split', JSON.stringify([[], [], [], [], [], [], []]))
    setFavourites(JSON.parse(localStorage.getItem('favourites')))
  }, [])





  return (
    <>
      <Context.Provider value={{exercises, setExercises, favourites, setFavourites, filteredItems, setFilteredItems, showAddExercise, setShowAddExercise, 
                                addExerciseName, setAddExerciseName, isExerciseAdded, setIsExerciseAdded }}>
      <Routes>
        <Route path='/' element={<LayoutMain/>}>
          <Route index path='/' element={<HomePage/>} />
        </Route>
        <Route path='/' element={<Layout/>}>
          <Route path='exercises' element={<Exercises/>}/>
          <Route path='exercises/:exerciseName' element={<Exercise/>}/> 
          <Route path='favourites' element={<Favourites/>} /> 
          <Route path='favourites/:exerciseName' element={<Exercise/>}/> 
          <Route path='myworkoutsplit' element={<MyWorkoutSplits/>} /> 
          <Route path='login' element={<Login/>} /> 
          <Route path='register' element={<Register/>} /> 
        </Route>
      </Routes>
      </Context.Provider>
    </>
  )
}

export default App

import React,{ useState } from 'react'
import * as pages from './pages';
import {Routes, Route} from 'react-router-dom';
import { NavBar } from './components';


import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index element={<pages.Home/>}/>
        <Route path='/search/:id' element={<pages.SearchHero/>}/>
        <Route path='/collection' element={<pages.Collection/>}/>
        <Route path='*' element={<pages.Notfound/>}/>
      </Route>

    </Routes>
      
        
    </>
  )
}

export default App

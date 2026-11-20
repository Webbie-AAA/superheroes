import React,{ useState } from 'react'
import * as pages from './pages';
import {Routes, Route} from 'react-router-dom';
import { NavBar } from './components';
import { FavProvider } from './components/Contexts';


import './App.css'

function App() {


  return (
    <>
      <FavProvider>
        <Routes>
          <Route path='/' element={<NavBar/>}>
            <Route index element={<pages.Home/>}/>
            <Route path='/search/:id' element={<pages.SearchHero/>}/>
            <Route path='/collection' element={<pages.Collection/>}/>
            <Route path='/contact-us' element={<pages.ContactUs/>}/>
            <Route path='*' element={<pages.Notfound/>}/>
          </Route>

        </Routes>
      </FavProvider> 
      
    </>
  )
}

export default App

import React, { useState, createContext, useContext, useEffect } from 'react'


const FavHero = createContext();

export const FavProvider = ({children}) => {
    const [favHero,setFavHero] = useState(() => {
        const savedHero = localStorage.getItem('favHero')
        return savedHero ? JSON.parse(savedHero): [];
    })

    useEffect(()=>{
      localStorage.setItem('favHero', JSON.stringify(favHero));
    }, [favHero])

  return (
    <FavHero.Provider value={{favHero,setFavHero}}>
        {children}
    </FavHero.Provider>
  )
};

export const useFavourite = () =>useContext(FavHero);

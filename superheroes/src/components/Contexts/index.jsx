import React, { useState, createContext, useContext } from 'react'


const FavHero = createContext();

export const FavProvider = ({children}) => {
    const [favHero,setFavHero] = useState([]);

  return (
    <FavHero.Provider value={{favHero,setFavHero}}>
        {children}
    </FavHero.Provider>
  )
};

export const useFavourite = () =>useContext(FavHero);

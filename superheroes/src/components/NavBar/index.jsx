import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export default function NavBar() {
  return (
    <>
        <main>
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/collection'>Collection</NavLink>
                    <NavLink to='/contact-us'>Contact Us</NavLink>


                </nav>


            </header>
        <Outlet/>
        
        </main>
    </>
    
  )
}

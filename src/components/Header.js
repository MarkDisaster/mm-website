import React from 'react'
import {Link} from 'react-router-dom'
import Navigation from './Navigation'
import Logo from '../assets/images/mm-logo.svg'

function Header() {
   return (
      <>
         <header id="header">
            <div id="logo">
               <Link to={`/`} >
                  <img src={Logo} title="Marek Media logo" alt="Marek Media logo"></img>
               </Link>
            </div>
            <Navigation />
		   </header>
      </>
   )
}
export default Header
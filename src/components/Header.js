import React from 'react'
import {Link} from 'react-router-dom'
import Navigation from './Navigation'
import Logo from './LogoAnimated'
//import { ReactComponent as LogoAnimated } from '../assets/images/mm-logo-white-animated.svg'

function Header() {
   return (
      <>
         <header id="header">
            <div id="logo">
               <Link to={`/`} >
                  <Logo />
               </Link>
            </div>
            <Navigation />
		   </header>
      </>
   )
}
export default Header
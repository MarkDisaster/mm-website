import React from 'react'
import {Link} from 'react-router-dom'
import Navigation from './Navigation'


function Header() {
   return (
      <>
         <header id="header">
			<div id="logo">
				<img src="/assets/images/mm-logo.svg" title="Marek Media logo" alt="Marek Media logo"></img>
			</div>
         <Navigation />
		</header>
      </>
   )
}
export default Header
import React from 'react'
import {Link} from 'react-router-dom'
import NavItems from './NavItems'

function Navigation() {

   function toggleMenu() {
      const toggleMenuButton = document.querySelector('.toggle-menu');
      const toggleMenu = document.querySelector('#primary-menu-container');

      toggleMenuButton.classList.toggle('active');
      toggleMenu.classList.toggle('active');     
   }
   return (
      <>
         <nav id="primary-menu">
            <div id="menu-mobile-toggle">
               <button type="submit" className="toggle-menu" onClick={toggleMenu}></button>
            </div>
            <div id="primary-menu-container">
               <div id="container-items">
                  <ul>
                     {NavItems.map((item, index) => {
                     return <li key={index} className={item.cName}>
                        <Link to={item.path} onClick={toggleMenu}>/{item.title}/</Link>
                     </li>
                  })}
                  </ul>
               </div>
               <div id="social-media">
                  <a href="https://github.com/markdisaster" className="icon github" target="_blank" rel="noreferrer">
                  </a>
                  <a href="https://behance.net/markdisaster" className="icon behance" target="_blank" rel="noreferrer">
                  </a>
               </div>
            </div>
         </nav>
      </>
   )
}
export default Navigation
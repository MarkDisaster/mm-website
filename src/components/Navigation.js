import React from 'react'
import {Link} from 'react-router-dom'
import GithubIcon from '../assets/images/github.svg'
import BehanceIcon from '../assets/images/behance.svg'

import NavItems from './NavItems'

function Navigation() {
   return (
      <>
         <nav id="primary-menu">
            <div id="menu-mobile-toggle">
               <button>(menu)</button>
            </div>
            <div id="primary-menu-container">
               <div id="container-items">
                  <ul>
                     {/*<li><a href="#">test1</a></li>
                     <li><Link to={`/page/2`}>Přečíst</Link></li>
                     <li><a href="#">test3</a></li> */}

                     {NavItems.map((item, index) => {
                     return <li key={index} className={item.cName}>
                        <Link to={item.path} >
                           <span>/{item.title}/</span>
                        </Link>
                     </li>
                  })}
                  </ul>
               </div>
               <div id="social-media">
                  <a href="https://markdisaster.github.com">
                     <img className="arrow-right" src={GithubIcon} title="Github" alt="Github" />
                  </a>
                  <a href="https://behance.net">
                     <img className="arrow-right" src={BehanceIcon} title="Behance" alt="Behance" />
                  </a>
               </div>
            </div>
         </nav>
      </>
   )
}
export default Navigation
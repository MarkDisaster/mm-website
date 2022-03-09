import React from 'react'
import {Link} from 'react-router-dom'

import NavItems from './NavItems'

function Navigation() {
   return (
      <>
         <section id="navigation">
            <nav>
               <ul>
                  {/*<li><a href="#">test1</a></li>
                  <li><Link to={`/page/2`}>Přečíst</Link></li>
                  <li><a href="#">test3</a></li> */}

                  {NavItems.map((item, index) => {
                  return <li key={index} className={item.cName}>
                     <Link to={item.path} >
                        <span>{item.title}</span>
                     </Link>
                  </li>
               })}
               </ul>

               
            </nav>
         </section>
      </>
   )
}
export default Navigation
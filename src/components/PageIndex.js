import React from 'react'
import Header from './Header'
import Introduction from './Introduction'
import Projects from './Projects'
import Services from './Services'
import ContactHomepage from './ContactHomepage'

function PageIndex() {
   document.body.className = 'page-index';

   return (   
      <>
      <Header />
         <main>
            <Introduction />
            <Projects />
            <Services />
            <ContactHomepage />
         </main>
      </> 
   )
}

export default PageIndex
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
         <Introduction />
         <Projects />
         <Services />
         <ContactHomepage />
      </> 
   )
}

export default PageIndex
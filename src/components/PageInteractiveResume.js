import React from 'react'
import Fade from 'react-reveal';

import calendar from '../assets/images/resume/calendar.svg';

function PageInteractiveResume() {

   /*setTimeout(function() {
      document.querySelector('.header-container').classList.add('center');
   }, 1000);*/


   return (
      <>
         <div className="page page-1">
            <div className="header-container">
               <h1>Marek</h1>
               <h1>Marek</h1>
               <h2>Interactive Resume</h2>
            </div>
         </div>
         <div className="page page-2">
            <div className="born-in">
               <div className="header">
                  <Fade left><h2>Test</h2></Fade>
                  <Fade left><hr /></Fade>
               </div>
               <div>
                  <img src={calendar} alt="Born in" />
               </div>
            </div>
         </div>
      </>
   )
}

export default PageInteractiveResume
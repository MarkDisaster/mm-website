import React, { useState, useRef } from 'react'
import { Fade, Zoom } from 'react-reveal';

import MMtextAnimated from './MMtextAnimated'
import line from '../assets/images/resume/line-zig-zag.svg';

import calendar from '../assets/images/resume/calendar.svg';
import map from '../assets/images/resume/map-czech-republic.svg';
import mapPin from '../assets/images/resume/map-pin.svg';

import checkboxBox from '../assets/images/resume/checkbox-box.svg';
import checkboxCheck from '../assets/images/resume/checkbox-check.svg';

import visualStudio from '../assets/images/resume/visualstudio.svg';
import illustrator from '../assets/images/resume/illustrator.svg';
import photoshop from '../assets/images/resume/photoshop.svg';
import xd from '../assets/images/resume/xd.svg';

import html from '../assets/images/resume/html.svg';
import css from '../assets/images/resume/css.svg';
import javascript from '../assets/images/resume/javascript.svg';
import jquery from '../assets/images/resume/jquery.svg';
import php from '../assets/images/resume/php.svg';
import mysql from '../assets/images/resume/mysql.svg';
import wordpress from '../assets/images/resume/wordpress.svg';
import react from '../assets/images/resume/react.svg';
import sass from '../assets/images/resume/sass.svg';
import git from '../assets/images/resume/git.svg';

import mail from '../assets/images/resume/mail.svg';
import phone from '../assets/images/resume/phone.svg';
import user from '../assets/images/resume/user.svg';

function PageInteractiveResume() {

   /*setTimeout(function() {
      document.querySelector('.header-container').classList.add('center');
   }, 1000);*/

   document.body.className = 'page-resume';

   const [checked, setChecked] = useState(0)
   const myRef = useRef();

   window.onscroll = function() {
      const x = myRef.current.offsetLeft;
      if (x === 0 && checked === 0) {
         setChecked(1)
         myRef.current.classList.add('fade')

      }
   };

   const scroll = () => {
      console.log('adfasd')
   }




   return (
      <>
         <div className="page page-1">

            <MMtextAnimated />
         </div>
         <div className="line">
            <img src={line} className="line" />
         </div>
         <div className="page page-2">
            <div className="born-in">
               <div className="header">
                  <Fade left>
                     <h2>Born on</h2>
                  </Fade>
                  <Fade left>
                     <hr />
                  </Fade>
               </div>
               <Zoom>
                  <img src={calendar} className="calendar" alt="Born on" />
               </Zoom>
            </div>
            <div className="lives-in">
               <div className="header">
                  <div>
                     <Fade left>
                        <h2>Lives in</h2>
                     </Fade>
                     <Fade left>
                        <hr />
                     </Fade>
                  </div>
               </div>
               <Zoom>
                  <div className="content">
                     <div>Jindřichův Hradec</div>
                     <img src={mapPin} className="map-pin" />
                  </div>
               </Zoom>
               <Zoom>
                  <img src={map} className="map" alt="Lives in" />
               </Zoom>
            </div>
            <div className="experience">
               <div className="header header-1">
                  <Fade left>
                     <h2>Education</h2>
                  </Fade>
                  <Fade left>
                     <h2>& experience</h2>
                  </Fade>
                  <Fade left>
                     <hr />
                  </Fade>
               </div>
               <div className="header header-2">
                  <Zoom>
                     <div className="checkbox">
                        <img src={checkboxBox} className="box" />
                        <div className="check" ref={myRef}>
                           <img src={checkboxCheck} className="checked" />
                        </div>
                     </div>
                  </Zoom>
                  <Fade left>
                     <h2>English</h2>
                  </Fade>

               </div>
               <div className="timeline">
                  <Fade left>
                     <hr />
                  </Fade>
                  <div className="items">
                     <div className="item">
                        <Zoom>
                           <div>
                              2004 - 2008<br />
                              SOŠ Jindřichův Hradec
                           </div>
                        </Zoom>
                        <Zoom>
                           <div className="point"></div>
                        </Zoom>
                     </div>
                     <div className="item">
                        <Zoom>
                           <div className="point"></div>
                        </Zoom>
                        <Zoom>
                           <div>
                              2011 - now<br />
                              Web developer<br />
                              Nemocnice Jindřichův<br />
                              Hradec
                           </div>
                        </Zoom>
                     </div>
                     <div className="item">
                        <Zoom>
                           <div>
                              2021 - now<br />
                              OSVČ<br />
                           </div>
                        </Zoom>
                        <Zoom>
                           <div className="point"></div>
                        </Zoom>
                     </div>
                     <div className="item">
                        <Zoom>
                           <div className="point"></div>
                        </Zoom>
                        <Zoom>
                           <div>
                              2021<br />
                              Start learning<br />
                              React a SASS<br />
                           </div>
                        </Zoom>
                     </div>
                  </div>

               </div>
            </div>
            <div className="apps-skills">
               <div className="apps">
                  <div className="header">
                     <Fade left>
                        <h2>Apps</h2>
                     </Fade>
                     <Fade left>
                        <hr />
                     </Fade>
                  </div>
                  <div className="content">
                     <Zoom>
                        <img src={visualStudio} className="border-rounded icon" alt="Visual Studio" />
                     </Zoom>
                     <Zoom>
                        <img src={illustrator} className="border-rounded icon" alt="Adobe Illustrator" />
                     </Zoom>
                     <Zoom>
                        <img src={photoshop} className="border-rounded icon" alt="Adobe Photoshop" />
                     </Zoom>
                     <Zoom>
                        <img src={xd} className="border-rounded icon" alt="Adobe XD" />
                     </Zoom>

                  </div>
               </div>
               <div className="skills">
                  <div className="header">
                     <Fade left>
                        <h2>Skills</h2>
                     </Fade>
                     <Fade left>
                        <hr />
                     </Fade>
                  </div>
                  <div className="content">
                     <Zoom>
                        <img src={html} className="icon" alt="HTML" />
                     </Zoom>
                     <Zoom>
                        <img src={css} className="icon" alt="CSS" />
                     </Zoom>
                     <Zoom>
                        <img src={javascript} className="icon javascript" alt="JavaScript" />
                     </Zoom>
                     <Zoom>
                        <img src={jquery} className="icon jquery" alt="jQuery" />
                     </Zoom>
                     <Zoom>
                        <img src={php} className="icon " alt="PHP" />
                     </Zoom>
                     <Zoom>
                        <img src={mysql} className="icon" alt="MySQL" />
                     </Zoom>
                     <Zoom>
                        <img src={wordpress} className="icon" alt="Wordpress" />
                     </Zoom>
                     <Zoom>
                        <img src={react} className="icon" alt="React" />
                     </Zoom>
                     <Zoom>
                        <img src={sass} className="icon" alt="Sass" />
                     </Zoom>
                     <Zoom>
                        <img src={git} className="icon" alt="Git" />
                     </Zoom>
                  </div>
               </div>
            </div>
            <div className="projects">
               <div className="header">
                  <Fade left>
                     <h2>Projects</h2>
                  </Fade>
                  <Fade left>
                     <hr />
                  </Fade>
               </div>
               <div className="content">
                  <div className="project">
                     <Zoom><div className="header">Web Nemocnice Jindřichův Hradec</div></Zoom>
                     <Fade down><div className="hr">&nbsp;</div></Fade>
                     <Zoom><div className="content">Webová prezentace Nemocnice Jindřichův Hradec ve Wordpressu. UX / UI. Pravidelná údržba a rozvoj.</div></Zoom>
                  </div>
                  <div className="project">
                     <Zoom><div className="header">Web kardiologické<br />ambulance</div></Zoom>
                     <Fade down><div className="hr">&nbsp;</div></Fade>
                     <Zoom><div className="content">Onepage webová prezentace kardiologická ambulance ve Wordpressu.</div></Zoom>
                  </div>
                  <div className="project">
                     <Zoom><div className="header">Intranet Nemocnice JH</div></Zoom>
                     <Fade down><div className="hr">&nbsp;</div></Fade>
                     <Zoom><div className="content">Intranet postavený na Wordpressu. Pravidelná údržba a rozšiřování funkcí. Vytváření a úpravy pluginů.</div></Zoom>
                  </div>
                  <div className="project">
                     <Zoom><div className="header">Portfolio v Reactu</div></Zoom>
                     <Fade down><div className="hr">&nbsp;</div></Fade>
                     <Zoom><div className="content">Vytvoření vlastního webu. Wordpress backend, frontend v Reactu. Práce s daty pomocí REST API.</div></Zoom>
                  </div>
               </div>
            </div>
            <div className="contact">
               <div className="header">
                  <Fade left>
                     <h2>Contact</h2>
                  </Fade>
                  <Fade left>
                     <hr />
                  </Fade>
               </div>
               <div className="content">
                  <Zoom>
                     <p><img src={mail} className="mail" alt="E-mail" />marek.marek@hotmail.cz</p>
                  </Zoom>
                  <Zoom>
                     <p><img src={phone} className="phone" alt="Telefon" />728 303 508</p>
                  </Zoom>
                  <Zoom>
                     <p><img src={user} className="user" alt="Web" /><a href="https://marek.media" target="_blank" rel="noopener noreferrer nofollow">www.marek.media</a></p>
                  </Zoom>
                  <Zoom>
                     <p><img src={user} className="user" alt="LinkedIn" /><a href="https://linkedin.com/in/marekmarekcz" target="_blank" rel="noopener noreferrer nofollow">LinkedIn</a></p>
                  </Zoom>
                  <Zoom>
                     <p><img src={git} className="git" alt="Github" /><a href="https://github.com/markdisaster" target="_blank" rel="noopener noreferrer nofollow">GitHub</a></p>
                  </Zoom>

               </div>
            </div>
         </div >
      </>
   )
}

export default PageInteractiveResume
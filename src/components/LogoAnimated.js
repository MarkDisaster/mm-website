import React, {useState, useEffect, useRef} from 'react'
import { ReactComponent as Logo } from '../assets/images/mm-logo-white-animated.svg'

function LogoAnimated() {

   const [images, setImages] = useState([])
   const svgRef = useRef()

   const animationSpeed = 800
   let stop = 0
   let timer

   useEffect(() => {
      setImages(svgRef.current.children); 
   })
   
   function animation(i) {
      
      if(stop == 1)
      return;
      
      if (i < 21) {
         timer = setTimeout(function () {               
            for(let i = 0; i < images.length; i++) {
               images[i].style.display = 'none';
            }
   
            images[i].style.display = 'block';
            animation(++i);
         }, animationSpeed);
      } if( i == 20 ) {
         timer = setTimeout(function () {
            animation(1);
         }, animationSpeed);
      }
   }

   function stopAnimation() {
      stop = 1
      clearTimeout(timer);
      
      for(let i = 0; i < images.length; i++) {
         images[i].style.display = 'none';
      }
      
      images[20].style.display = 'block';
      stop = 1
   }

   function playAnimation() {
      stop = 0
      animation(1);
   };

   
   return (
      <>
         <Logo ref={svgRef} onMouseEnter={playAnimation} onMouseLeave={stopAnimation} onClick={stopAnimation} />
      </>
   )
}
export default LogoAnimated
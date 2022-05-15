import React, { useState, useEffect, useRef } from 'react'
import { ReactComponent as MMtext } from '../assets/images/mm-text.svg'

function MMtextAnimated() {

   const [images, setImages] = useState([])
   const svgRef = useRef()

   const animationSpeed = 600
   let stop = 0
   let timer

   useEffect(() => {
      setImages(svgRef.current.children);
   }, [setImages])

   console.log(images)

   return (
      <>
         <MMtext ref={svgRef} />
      </>
   )
}
export default MMtextAnimated
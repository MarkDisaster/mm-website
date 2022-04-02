import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Homepage() {
   const [Homepage, setHomepage] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      axios.get(`${process.env.REACT_APP_URL}/posts/26`)
      .then(res => {
         setHomepage(res.data)
         setIsLoaded(true)
      })
      .catch(err => {
         console.log(err)
      })
   }, [setHomepage])

   if(isLoaded) {
      return (
         <section id="introduction">
            <div className="content">
               <div dangerouslySetInnerHTML={{__html: Homepage.content.rendered}} />
            </div>
            <a className="more-link" href="/kontakt">Kontakt</a>
         </section>
      )
   }
   return (
      <div id="loading">Loading...</div>
   )
}

export default Homepage
import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Homepage() {
   const [Homepage, setHomepage] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      axios.get(`https://adm.marek.media/wp-json/wp/v2/posts/26`)
      .then(res => {
         setHomepage(res.data)
         setIsLoaded(true)
      })
      .catch(err => {
         console.log(err)
         console.log('nepovedlo se')
      })
   }, [setHomepage])

   if(isLoaded) {
      return (
         <section id="introduction">
            <div className="content">
               <div dangerouslySetInnerHTML={{__html: Homepage.content.rendered}} />
            </div>
            <a className="more-link" href="/#">Kontakt</a>
         </section>
      )
   }
   return (
      <div id="loading">Loading...</div>
   )
}

export default Homepage
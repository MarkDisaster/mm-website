import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Homepage() {
   const [Homepage, setHomepage] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      axios.get(`https://adm.marek.media/wp-json/wp/v2/pages/2`)
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
         <section id="homepage">
            <div dangerouslySetInnerHTML={{__html: Homepage.content.rendered}} />
            <div>Načteno</div>
         </section>
      )
   }
   return (
      <div>Loading...</div>
   )
}

export default Homepage
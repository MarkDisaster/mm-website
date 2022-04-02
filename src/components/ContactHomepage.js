import React, {Fragment, useState, useEffect} from 'react'
import axios from 'axios'

function Page() {
   const [post, setPost] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   
   useEffect(() => {
      axios.get(`${process.env.REACT_APP_URL}/pages?slug=kontakt-hlavni-strana`)
      .then(res => {
         setPost(res.data)
         //console.log('slug:' + slug)
         setIsLoaded(true)
      })
      .catch(err => {
         console.log(err)
      })
   }, [setPost])

   if(isLoaded) {
      return (
         <>
            <section id="contact">
               <div className="contact">
                  <div dangerouslySetInnerHTML={{__html: post[0].content.rendered}} />
               </div>
            </section>
         </> 
      )
   }
   return (
      <div id="loading">Loading...</div>
   )
}

export default Page
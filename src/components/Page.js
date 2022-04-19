import React, {Fragment, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function Page() {
   const {slug} = useParams()
   const [post, setPost] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   
   useEffect(() => {
      axios.get(`${process.env.REACT_APP_URL}/pages?slug=${slug}`)
      .then(res => {
         setPost(res.data)
         //console.log('slug:' + slug)
         setIsLoaded(true)
      })
      .catch(err => {
         console.log(err)
      })
   }, [setPost, slug])

   if(isLoaded) {
      return (
         
         <>
            <main>
               <div dangerouslySetInnerHTML={{__html: post[0].content.rendered}} />
            </main>
         </> 
      )
   }
   return (
      <div id="loading">Loading...</div>
   )
}

export default Page
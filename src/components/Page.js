import React, {Fragment, useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

function Page() {
   const {slug} = useParams()
   const [post, setPost] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   
   useEffect(() => {
      axios.get(`/wp-json/wp/v2/pages?slug=${slug}`)
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
            <div dangerouslySetInnerHTML={{__html: post[0].content.rendered}} />
            <div><Link to='/'>Zpět</Link></div>
         </> 
      )
   }
   return (
      <div>Loading...</div>
   )
}

export default Page
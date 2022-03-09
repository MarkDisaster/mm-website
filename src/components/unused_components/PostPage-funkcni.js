import React, {Fragment, useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

function PostPage() {
   const {id} = useParams()
   const [post, setPost] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)


   useEffect(() => {
      axios.get(`/wp-json/wp/v2/posts/${id}`)
      .then(res => {
         setPost(res.data)
         setIsLoaded(true)
      })
      .catch(err => {
         console.log(err)
      })
   }, [setPost])


   
   if(isLoaded) {
      return (
         <Fragment>
            <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            <div><Link to='/'>Zpět</Link></div>
         </Fragment> 
      )
   }
   return (
      <div>Loading...</div>
   )
}

export default PostPage
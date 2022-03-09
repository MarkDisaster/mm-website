import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostItem from './PostItem'


function Posts() {
   const [posts, setPosts] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      axios.get(`/wp-json/wp/v2/posts?categories=2`)
      .then(res => {
         setPosts(res.data)
         setIsLoaded(true)
      })
      .catch(err => {
         console.log(err)
      })
   }, [setPosts])

if(isLoaded) {
   return (
      <>
         <section id="posts">
            {posts.map(post => (
               <PostItem key={post.id} post={post} />
            ))}
         </section>
      </>
   )
      
}
return (
   <div>Loading...</div>
)
}
export default Posts
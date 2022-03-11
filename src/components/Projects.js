import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectItem from './ProjectItem'


function Projects() {
   const [posts, setPosts] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      axios.get(`https://adm.marek.media/wp-json/wp/v2/posts?categories=2`)
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
         <section id="projects">
            <header></header>
            {posts.map(post => (
               <ProjectItem key={post.id} post={post} />
            ))}
         </section>
      </>
   )
      
}
return (
   <div>Loading...</div>
)
}
export default Projects
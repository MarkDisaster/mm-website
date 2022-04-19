import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectItem from './ProjectItem'
import ArrowRight from '../assets/images/arrow-right.svg'


function Projects() {
   const [posts, setPosts] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      axios.get(`${process.env.REACT_APP_URL}/posts?categories=2`)
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
            <header>
               <img src={ArrowRight} alt="Odrážka Projekty"/>
               <a href="/projekty">Projekty</a>
            </header>
            <div className="content">
               {posts.map(post => (
                  <ProjectItem key={post.id} post={post} />
               ))}
            </div>
         </section>
      </>
   )
      
}
return (
   <div id="loading">Loading...</div>
)
}
export default Projects
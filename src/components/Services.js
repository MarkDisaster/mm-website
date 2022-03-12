import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ServicesItem from './ServicesItem'
import ArrowRight from '../assets/images/arrow-right.svg'


function Services() {
   const [posts, setPosts] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      axios.get(`https://adm.marek.media/wp-json/wp/v2/posts?categories=6&order=asc`)
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
         <section id="services">
            <header>
               <img src={ArrowRight} alt="Odrážka Služby" />
               <a href="/services">Služby</a>
            </header>
            <div className="content">
               {posts.map(post => (
                  <ServicesItem key={post.id} post={post} />
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
export default Services
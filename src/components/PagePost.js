import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function PagePost() {
   const { id } = useParams()
   const [post, setPost] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)



   useEffect(() => {
      axios.get(`${process.env.REACT_APP_URL}/posts/${id}`)
         .then(res => {
            setPost(res.data)


            setIsLoaded(true)
         })
         .catch(err => {
            console.log(err)
         })
   }, [setPost, id])


   if (isLoaded) {
      return (
         <>
            <Fragment>
               <section>
                  <article>
                     <div><h1>{post.title.rendered}</h1></div>
                     <div className="content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                  </article>
               </section>
            </Fragment>
         </>
      )
   }
   return (
      <>
         <div id="loading">Loading...</div>
      </>
   )
}

export default PagePost
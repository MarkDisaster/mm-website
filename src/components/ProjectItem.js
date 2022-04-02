import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function ProjectItem(props) { //Props jako parametr mi umožní přístup k propereties u potomka komponenty.
   //console.log(props)

   const [imgUrl, setImgUrl] = useState([])
   const [post, setPost] = useState(props.post)
   const [isLoaded, setIsLoaded] = useState(false)

   //console.log('props:' + props)

   useEffect(() => {
      setPost(props.post)

      axios.get(`${process.env.REACT_APP_URL}/media/${post.featured_media}`)
      .then(res => {
         setImgUrl(res.data.media_details.sizes.full.source_url)
         //setPost(props.post)
         setIsLoaded(true)
      })
      .catch(err => {
         console.log(err)
      })
   }, [imgUrl, post, setImgUrl, setPost, props.post])

   if(isLoaded) {
      return(
         <article>
            <div className="thumbnail">
            <Link to={`/clanek/${post.id}`} >
               <img src={imgUrl} alt={post.title.rendered} />
            </Link>
            </div>
            <div className="content">
               <header>
                  <h2>
                     <Link to={`/clanek/${post.id}`}>{post.title.rendered}</Link>
                  </h2>
               </header>
               <div className="excerpt" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
               <div>
                  <Link className="more-link" to={`/clanek/${post.id}`}>Přečíst</Link>
               </div>
            </div>
         </article>
      )
   }
   return (
      <>
         <div id="loading">Loading...</div>
      </>
   )
}
export default ProjectItem
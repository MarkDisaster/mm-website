import React, {Fragment, useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

function PostPage() {
   const {id} = useParams()
   const [post, setPost] = useState([])
   const [img, setImg] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)


   useEffect(() => {
      axios.get(`https://adm.marek.media/wp-json/wp/v2/posts/${id}`)
      .then(res => {
         setPost(res.data)

         //console.log(res.data.featured_media)
         axios.get(`https://adm.marek.media/wp-json/wp/v2/media/${res.data.featured_media}`).then(res => {
         //console.log(res.data)
         setImg(res.data)
         setIsLoaded(true)
         })
      })
      .catch(err => {
         console.log(err)
      })
   }, [setPost, id])

   
   if(isLoaded) {
      return (
         <Fragment>
            <article>
               {/*<div><img src={img.media_details.sizes.full.source_url} alt={img.alt_text} /></div>*/}
               <div><h1>{post.title.rendered}</h1></div>
               <div class="content" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </article>
         </Fragment> 
      )
   }
   return (
      <div>Loading...</div>
   )
}

export default PostPage
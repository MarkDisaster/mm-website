import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function PostItem(props) { //Props jako parametr mi umožní přístup k propereties u potomka komponenty.
   //console.log(props)

   const [imgUrl, setImgUrl] = useState([])
   const [post, setPost] = useState(props.post)
   const [isLoaded, setIsLoaded] = useState(false)

   //console.log('props:' + props)

   useEffect(() => {
      setPost(props.post)

      axios.get(`/wp-json/wp/v2/media/${post.featured_media}`)
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
         <div>
            <div className="post">
               <div className="image">
                  <img src={imgUrl} alt={post.title.rendered} />
               </div>
               <div className="content">
                  <div className="title">
                     <h2>{post.title.rendered}</h2>
                  </div>
                  <div className="excerpt" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                  <div>
                     <Link to={`/post/${post.id}`}>Přečíst</Link>
                  </div>
               </div>
            </div>
         </div>
      )
   }
   return <div>{props.post.id}</div>
}
export default PostItem
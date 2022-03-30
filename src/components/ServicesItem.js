import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function ServicesItem(props) { //Props jako parametr mi umožní přístup k propereties u potomka komponenty.
   console.log(props)

   const [post, setPost] = useState(props.post)

   console.log('props:' + props)

   
      return(
         <article>
            <div className="content">
               <header>
                  <h2>
                     <Link to={`/services#${post.id}`}>{post.title.rendered}</Link>
                  </h2>
               </header>
               <div className="excerpt" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
               <div>
                  <Link className="more-link" to={`/services#${post.id}`}>Více</Link>
               </div>
            </div>
         </article>
      )
   }
export default ServicesItem
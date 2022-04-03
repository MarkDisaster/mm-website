import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'






function ServicesItem(props) { //Props jako parametr mi umožní přístup k propereties u potomka komponenty.
   console.log(props)
   const [post, setPost] = useState(props.post)

   function renderContent() {
      if (window.location.href.indexOf('sluzby') > -1) {
         return (<div className="excerpt" dangerouslySetInnerHTML={{__html: post.content.rendered}} />);
      } else {
         return (<div className="excerpt" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />);
      }
   }

   function renderMoreButton() {
      if (window.location.href.indexOf('sluzby') > -1) {
      } else {
         return (<Link className="more-link" to={`/sluzby#${post.id}`}>Více</Link>);
      }
   }
   
      return(
         <article>
            <div className="content">
               <header>
                  <h2 id={post.id}>
                     <Link to={`/sluzby#${post.id}`}>{post.title.rendered}</Link>
                  </h2>
               </header>

               {renderContent()}
               
               <div>
                  {renderMoreButton()}
                  
               </div>
            </div>
         </article>
      )
   }
export default ServicesItem
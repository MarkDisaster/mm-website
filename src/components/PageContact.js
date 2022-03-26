import React, {Fragment, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import ContactForm from './ContactForm'

function PageContact() {
   const [post, setPost] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   document.body.className = 'page-contact';

   useEffect(() => {
      axios.get(`https://adm.marek.media/wp-json/wp/v2/pages?slug=contact`)
      .then(res => {
         setPost(res.data)
         //console.log('slug:' + slug)
         setIsLoaded(true)
      })
      .catch(err => {
         console.log(err)
      })
   }, [setPost])

   if(isLoaded) {
      return (
         <>
            <section>
               <div className="message">
                  <h1>Máte zájem o spolupráci?<br/>Kontaktujte mě.</h1>
               </div>
               <div className="contact-text">
                  <div dangerouslySetInnerHTML={{__html: post[0].content.rendered}} />
               </div>
               <ContactForm />
            </section>
         </> 
      )
   }
   return (
      <>
         <div id="loading">Loading...</div>
      </>
   )
}

export default PageContact
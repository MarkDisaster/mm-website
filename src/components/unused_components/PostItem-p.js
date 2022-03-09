import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'
import axios from 'axios'

export class PostItem extends Component {

   state = {
      imgUrl: '',
      author: '',
      isLoaded: false
   }

   static propTypes = {
      post: propTypes.object.isRequired
   }

   componentDidMount() {
      const {featured_media, author} = this.props.post

      const getImageUrl = axios.get(`/wp-json/wp/v2/media/${featured_media}`)
      const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`)

      Promise.all([getImageUrl, getAuthor]).then(res => {
         console.log(res)
         this.setState({
            imgUrl: res[0].data.media_details.sizes.full.source_url,
            //author: res[1].data.name,
            isLoaded: true
         })
      })
   }
   
   render() {
      const {id, title, excerpt} = this.props.post
      const {/*author,*/ imgUrl, isLoaded} = this.state

      if(isLoaded) {
         return (
            <div className="post">
               <div className="image"><img src={imgUrl} alt={title.rendered} /></div>
               <div className="content">
                  <div className="title">
                     <h2>{title.rendered}</h2>
                  </div>
                  <div className="excerpt" dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
                  <div></div>
                  <div>
                     <Link to={`/post/${id}`}>Přečíst</Link>
                  </div>
               </div>
               
            </div>
         )
      }
      return null
   }
}

export default PostItem
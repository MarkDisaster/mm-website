import React, {Component, Fragment, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

const PostPage = (props) => {
   const {id} = useParams()
   const [post, isLoaded] = useState(null)

   function getPostDetail() {
      axios.get(`/wp-json/wp/v2/posts/${props.id}.json`)
      .then(res => this.setState({
         post: res.data,
         id: this.props.id,
         isLoaded: true
      }))
      .catch(err => console.log(err))
   }

   return (
      <Fragment>
         <div><Link to='/'>Zpět</Link></div>
         <div>ID: {id}</div>
      </Fragment>
   )
}



export default PostPage
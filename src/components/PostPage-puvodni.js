import React, {Component, Fragment} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

export class PostPage extends Component {
   state = {
      post: {},
      isLoaded: false
   }

   componentDidMount() {
      axios.get(`/wp-json/wp/v2/posts/13`)
      .then(res => this.setState({
         post: res.data,
         isLoaded: true
      }))
      .catch(err => console.log(err))
     
   }

   render() {
      const {post, isLoaded} = this.state
      const params = useParams()
      if(isLoaded) {
         return(
            <Fragment>
               <div>client: {JSON.stringify(params)}</div>
               <div><Link to='/'>Zpět</Link></div>
               <h1>{post.title.rendered}</h1>
               <div dangerouslySetInnerHTML={{__html:post.content.rendered}}/>
            </Fragment>
         )
      }
      return(
         <h3>Loading...</h3>
      )
   }
}

export default PostPage
import React, { Component } from 'react'
import axios from 'axios'
import PostItem from './PostItem'

export class Posts extends Component {
   state = {
      posts: [],
      isLoaded: false
   }

   componentDidMount() {
      axios.get('/wp-json/wp/v2/posts?categories=2')
      .then(res => this.setState({
         posts: res.data,
         isLoaded: true
      }))
      .catch(err => console.log(err))
   }

   render() {
      const {posts, isLoaded} = this.state
      
      if(isLoaded) {
         return (
            <section id="posts">
               {posts.map(post => (
                  <PostItem key={post.id} post={post} />
               ))}
            </section>
         )
      }
      return <h3>Loading...</h3>
   }
}

export default Posts
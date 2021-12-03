import React, { Component } from 'react'
import axios from 'axios'

export class Homepage extends Component {
   state = {
      homepage: [],
      isLoaded: false
   }

   componentDidMount() {
      axios.get('/wp-json/wp/v2/pages/2')
      .then(res => this.setState({
         homepage: res.data,
         isLoaded: true
      }))
      .catch(err => console.log(err))
   }

   render() {
      const {homepage, isLoaded } = this.state
      
      if(isLoaded) {
         return (
            <section>
               <section id="homepage">
                  <div dangerouslySetInnerHTML={{__html: homepage.content.rendered}} />
               </section>
            </section>
            
         )
      }
      return <h3>Loading...</h3>
   }
}

export default Homepage
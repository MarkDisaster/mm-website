import React, {Fragment} from 'react'
import {Link, useLocation, } from 'react-router-dom'
import axios from 'axios'

function PostPage() {
   const location = useLocation()
   console.log(this.props.match.params.id)


   return (
      <Fragment>
         <div><Link to='/'>Zpět</Link></div>
      </Fragment>
   )
}

export default PostPage
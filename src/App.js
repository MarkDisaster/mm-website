import React, {Fragment } from 'react'
import {Routes, Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import Homepage from './components/Homepage'
import Posts from './components/Posts'
import PostPage from './components/PostPage'

function App() {
  return (
    <div className="App">
      <Fragment>
          <Routes>
          <Route path='/' element={<><Navigation /><Homepage /><Posts /></>} />
          <Route path='/post/:id' element={<><Navigation /><PostPage /></>} />
          {/*<Route path='/post/:id' component={Navigation} /> component nefunguje, element funguje*/}
          </Routes>
      </Fragment>
    </div>
  );
}

export default App;

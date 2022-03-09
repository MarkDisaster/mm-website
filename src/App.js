import React, {Fragment } from 'react'
import {Routes, Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import Homepage from './components/Homepage'
import Posts from './components/Posts'
import PostPage from './components/PostPage'
import Page from './components/Page'

function App() {
  return (
    <div className="App">
      <Fragment>a
          <Routes>b
            <Route path='/' exact element={<><Navigation /><Homepage /><Posts /></>} />
            <Route path='/:slug' exact element={<><Navigation /><Page /></>} />
            <Route path='/post/:id' exact element={<><Navigation /><PostPage /></>} />
            <Route path='/posts' exact element={<><Navigation /><Posts /></>} />
            {/*<Route path='/post/:id' component={Navigation} /> Od Router v6 component nefunguje, místo toho se používá element*/}
          </Routes>
      </Fragment>
    </div>
  );
}

export default App;

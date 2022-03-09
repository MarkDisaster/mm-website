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
      <Fragment>
          <Routes>
            <Route path='mm-website/' exact element={<><Navigation /><Homepage /><Posts /></>} />
            <Route path='mm-website/:slug' exact element={<><Navigation /><Page /></>} />
            <Route path='mm-website/post/:id' exact element={<><Navigation /><PostPage /></>} />
            <Route path='mm-website/posts' exact element={<><Navigation /><Posts /></>} />
            {/*<Route path='/post/:id' component={Navigation} /> Od Router v6 component nefunguje, místo toho se používá element*/}
          </Routes>
      </Fragment>
    </div>
  );
}

export default App;

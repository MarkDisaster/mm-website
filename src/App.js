import React, {Fragment } from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Navigation from './components/Navigation'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import PostPage from './components/PostPage'
import Page from './components/Page'

function App() {
  return (
    <div className="App">
      <Fragment>
          <Routes>
            <Route path='/' exact element={<><Header /><Introduction /><Projects /></>} />
            <Route path='/:slug' exact element={<><Header /><Page /></>} />
            <Route path='/post/:id' exact element={<><Header /><PostPage /></>} />
            <Route path='/posts' exact element={<><Header /><Projects /></>} />
            {/*<Route path='/post/:id' component={Navigation} /> Od Router v6 component nefunguje, místo toho se používá element*/}
          </Routes>
      </Fragment>
    </div>
  );
}

export default App;

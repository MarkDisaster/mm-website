import React, {Fragment } from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Services from './components/Services'
import Page from './components/Page'
import PostPage from './components/PostPage'
import ContactHomepage from './components/ContactHomepage'


function App() {
  return (
    <div className="App">
      <Fragment>
          <Routes>
            <Route path='/' exact element={<><Header /><main><Introduction /><Projects /><Services /><ContactHomepage /></main></>} />
            <Route path='/:slug' exact element={<><Header /><main><Page /></main></>} />
            <Route path='/post/:id' exact element={<><Header /><main><PostPage /></main></>} />
            <Route path='/posts' exact element={<><Header /><main><Projects /></main></>} />
            {/*<Route path='/post/:id' component={Navigation} /> Od Router v6 component nefunguje, místo toho se používá element*/}
          </Routes>
      </Fragment>
    </div>
  );
}

export default App;

import React, {Fragment } from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Projects from './components/Projects'
import Services from './components/Services'
import Page from './components/Page'
import PagePost from './components/PagePost'
import PageContact from './components/PageContact'
import PageIndex from './components/PageIndex'


function App() {
  return (
    <div className="App">
      <Fragment>
          <Routes>
            <Route path='/' exact element={<><Header /><main><PageIndex /></main></>} />
            <Route path='/:slug' exact element={<><Header /><main><Page /></main></>} />
            <Route path='/article/:id' exact element={<><Header /><main><PagePost /></main></>} />
            <Route path='/projects' exact element={<><Header /><main><Projects /></main></>} />
            <Route path='/services' exact element={<><Header /><main><Services /></main></>} />
            <Route path='/contact' exact element={<><Header /><main><PageContact /></main></>} />
            {/*<Route path='/post/:id' component={Navigation} /> Od Router v6 component nefunguje, místo toho se používá element*/}
          </Routes>
      </Fragment>
    </div>
  );
}

export default App;

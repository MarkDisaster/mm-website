import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Projects from './components/Projects'
import Services from './components/Services'
import Page from './components/Page'
import PagePost from './components/PagePost'
import PageContact from './components/PageContact'
import PageIndex from './components/PageIndex'
import PageInteractiveResume from './components/PageInteractiveResume'


function App() {
  return (
    <div className="App">
      <Fragment>
        <Routes>
          <Route path='/' exact element={<><Header /><main><PageIndex /></main></>} />
          <Route path='/:slug' exact element={<><Header /><main><Page /></main></>} />
          <Route path='/clanek/:id' exact element={<><Header /><main><PagePost /></main></>} />
          <Route path='/projekty' exact element={<><Header /><main><Projects /></main></>} />
          <Route path='/sluzby' exact element={<><Header /><main><Services /></main></>} />
          <Route path='/kontakt' exact element={<><Header /><main><PageContact /></main></>} />
          <Route path='/interactive-resume' exact element={<><PageInteractiveResume /></>} />
          {/*<Route path='/post/:id' component={Navigation} /> Od Router v6 component nefunguje, místo toho se používá element*/}
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;

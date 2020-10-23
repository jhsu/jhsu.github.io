import React, { lazy, Suspense }  from 'react';
import {importMDX} from 'mdx.macro';
import {MDXProvider} from '@mdx-js/react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Header from './layout/Header';

const Content = lazy(() => importMDX('./posts/001-first-post/Content.mdx'))

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MDXProvider>
          <Switch>
            <Route>
              <Suspense fallback={<div>Loading...</div>}>
                <Content />
              </Suspense>
            </Route>
          </Switch>
        </MDXProvider>
      </div>
    </Router>
  );
}

export default App;

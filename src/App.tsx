import React, { lazy, Suspense }  from 'react';
import {importMDX} from 'mdx.macro';

import './App.css';
const Content = lazy(() => importMDX('./posts/001-first-post/Content.mdx'))


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  );
}

export default App;

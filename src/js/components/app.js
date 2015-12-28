import React from 'react';
import Uploader from './uploader';
import Template from './app-template';
import MarcEditor from './marc-editor';
import {Router, Route, IndexRoute} from 'react-router';

export default() => {
  return (
    <Router>
      <Route path="/" component={Template}>
        <IndexRoute component={MarcEditor}/>
        <Route path="upload" component={Uploader}/>
      </Route>
    </Router>
  );
}
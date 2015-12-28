import React from 'react';
import Uploader from './uploader';
import Template from './app-template';
import MarcEditor from './marc-editor';
import {Router, Route, IndexRoute} from 'react-router';

import createHistory from 'history/lib/createHashHistory';

// Opt-out of persistent state, not recommended.
var history = createHistory({
  queryKey: false
});

export default() => {
  return (
    <Router history={history}>
      <Route path="/" component={Template}>
        <IndexRoute component={MarcEditor}/>
        <Route path="upload" component={Uploader}/>
      </Route>
    </Router>
  );
}
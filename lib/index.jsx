import React from 'react';
import ReactDOM from 'react-dom';
import MarcEditor from './components/marc-editor'

var app = document.createElement('div');
app.id = 'MARC_EDITOR'
document.body.appendChild(app);

ReactDOM.render(
  <MarcEditor/>,
  document.getElementById('MARC_EDITOR')
);

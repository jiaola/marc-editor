import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="row" style={{borderBottom: '1px solid #ccc'}}>
      <div className="col-sm-3"><h3 className="panel-title">MARC Editor</h3></div>
      <div className="col-sm-9 text-right">
        <Link to="/upload" className="btn btn-xs btn-primary">Upload MARC</Link>
        <a href="https://github.com/jiaola/marc-editor" className="btn btn-default btn-xs btn-primary" target="_new">Source Code</a>
      </div>
    </div>
  )
}
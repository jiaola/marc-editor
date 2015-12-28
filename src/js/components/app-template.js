import React from 'react';
import Header from './header/app-header';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div className="container">
      <Header></Header>
      {props.children}
    </div>
  )
}
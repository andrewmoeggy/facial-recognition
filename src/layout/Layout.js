import React from 'react';
import './Layout.scss';

const Layout = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
}

export default Layout;
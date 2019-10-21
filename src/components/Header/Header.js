import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__nav--h1">Face Recog</h1>
        <ul className="header__nav--list">
          <li className="header__nav--list-item">
            <a href="http://localhost:3000/">About</a>
          </li>
          <li className="header__nav--list-item">
            <a href="http://localhost:3000/">Sign Out</a>
          </li>
        </ul >
      </nav>
    </header>
  );
}

export default Header;
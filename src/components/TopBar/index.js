import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-link">
        <img className="header-logo" src="/tokopedia-devcamp2022.png" alt="Tokopedia DevCamp 2022" />
      </Link>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h2>Welcome React Workshop</h2>
      </div>
      <p className="Home-intro">
        To get started, edit <code>src/App.js</code> or <code>src/Home.js</code> and save to reload.
      </p>
      <ul className="Home-resources">
        <li>
          <Link to="/user">Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;

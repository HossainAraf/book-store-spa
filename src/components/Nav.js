import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/nav.css';

const Nav = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul className={Nav.ul}>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/categories">CATEGORIES</Link></li>
    </ul>
    <div id="user-icon">
      <FontAwesomeIcon icon={faUser} style={{ color: '#0290ff' }} />
    </div>
  </nav>
);

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/nav.css';

const Nav = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul className={Nav.ul}>
      <li id="nav-book"><Link className="a-book" to="/">BOOKS</Link></li>
      <li id="nav-categories"><Link className="a-categories" to="/categories">CATEGORIES</Link></li>
    </ul>
    <div id="user-icon">
      <FontAwesomeIcon icon={faUser} style={{ color: '#0290ff' }} />
    </div>
  </nav>
);

export default Nav;

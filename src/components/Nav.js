import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul className={Nav.ul}>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/categories">CATEGORIES</Link></li>
    </ul>
  </nav>
);

export default Nav;

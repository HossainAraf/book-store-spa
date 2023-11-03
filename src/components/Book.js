// Individual Book component
//IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import { RemoveBookButton } from './Button';

const Book = ({ title, author, category }) => (
  <div className="book">
    <h3>
      Title:
      {title}
    </h3>
    <p>
      Author:
      {author}
    </p>
    <p>
      Category:
      {category}
    </p>
    <button type="button">Delete</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;

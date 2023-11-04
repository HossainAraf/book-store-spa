// Individual Book component
// IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import { RemoveBookButton } from './Button';
import '../styles/book.css';


const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };
  return (
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
      <RemoveBookButton type="button" onClick={handleRemoveBook}>Delete</RemoveBookButton>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;

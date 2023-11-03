// IMPORTS
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/booksSlice';
import { AddBookButton } from './Button';

// COMPONENT
const AddBook = () => (
  const dispatch = useDispatch();
  // COMPONENT STATE
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // EVENT HANDLERS
  const onTitleChanged = (e) => {
    setTitle(e.target.value)
  };
  const onAuthorChanged = (e) => {
    setAuthor(e.target.value)
  };
  const submitBook = (e) => {
    e.preventDefault();
    const id = nanoid();

    // DISPATCH ACTION TO ADD BOOK
    dispatch(addBook({ item_id=id, title, author, category:''}));

    // RESET STATE
    setTitle('');
    setAuthor('');
  };
  
  <form>
    <h4>Add New Book</h4>
    <input
      type="text"
      placeholder="Add Title ..."
      name="title"
      className="add-title"
    />
    <input
      type="text"
      placeholder="Add Author"
      name="author"
      className="add-author"
    />
    <button type="submit" className="add-submit">
      ADD BOOK
    </button>
  </form>
);

export default AddBook;

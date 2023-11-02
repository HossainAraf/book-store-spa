// IMPORTS
import { createSlice, nanoid } from '@reduxjs/toolkit';

// STATE
const initialBooksState = {
  books: [],
};

// CREATE A SLICE USING createSlice
const bookSlice = createSlice({
  name: 'book',
  initialState: initialBooksState,
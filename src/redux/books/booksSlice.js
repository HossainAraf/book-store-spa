// IMPORTS
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GIRQBhlsKPXQAMouEvWh/books';

const fetchBooks = createAsyncThunk('DisplayBooks', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const addBook = createAsyncThunk('AddBook', async (book) => {
  const response = await axios.post(API_URL, book);
  return response.data === 'Created' ? book : null;
});

const removeBook = createAsyncThunk('RemoveBook', async (ITEM_ID) => {
  const response = await axios.delete(`${API_URL}/${ITEM_ID}`);
  return response.data === 'The book was deleted successfully!' ? ITEM_ID : null;
});

// STATE
const initialState = {
  books: [],
  error: '',
  loading: 'idle',
};

// CREATE A SLICE USING createSlice
const bookSlice = createSlice({
  name: 'book',
  initialState: initialBooksState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => (
      state.filter((book) => book.item_id !== action.payload)
    ),
  },
});

// EXPORT ACTIONS & REDUCER
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;

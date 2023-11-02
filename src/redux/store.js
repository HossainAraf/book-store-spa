// redux/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const reducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;

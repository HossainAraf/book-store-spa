import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import AddBook from './AddBook';
import '../styles/bookList.css';

// COMPONENT
const BooksPage = () => {
  // HOOKS
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  // FETCH BOOKS ON COMPONENT MOUNT
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // RENDERING BOOKS
  return (
    <div className="books-container">
      <ul className="books">
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <div className="hr" />
      <AddBook />
    </div>
  );
};

export default BooksPage;

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import AddBook from './AddBook';

// COMPONENT
const BooksPage = () => {
  // HOOKS
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  return (
    <div>
      <ul className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default BooksList;

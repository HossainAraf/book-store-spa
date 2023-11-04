import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import AddBook from './AddBook';

const BooksList = () => {
  const books = useSelector((state) => state.books);
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

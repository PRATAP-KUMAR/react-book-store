import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksFromAPIAction } from '../redux/books/books';
import Header from './Header';
import Book from './Book';
import Form from './Form';
import '../css/Books.css';

const Books = () => {
  const books = useSelector((books) => books.addAndRemoveReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooksFromAPIAction());
    }
  });

  return (
    <>
      <div className="books-container">
        <Header />
        <div className="book-content">
          {books.map((book) => (
            <>
              <Book book={book} />
            </>
          ))}
          <Form />
        </div>
      </div>
    </>
  );
};

export default Books;

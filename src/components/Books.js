import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksFromAPIAction } from '../redux/books/books';
import Header from './Header';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((books) => books.addAndRemoveReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksFromAPIAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div>
        {books.map((book) => (
          <>
            <Book book={book} />
          </>
        ))}
        <Form />
      </div>
    </>
  );
};

export default Books;

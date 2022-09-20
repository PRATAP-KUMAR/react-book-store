import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBookAction } from '../redux/books/books';
import '../css/Book.css';

const Book = () => {
  const arrayObj = useSelector((books) => books.addAndRemoveReducer);
  const dispatch = useDispatch;

  const handleRemoveButtton = (e) => {
    const toRemove = document.getElementById(e.target.id);
    toRemove.remove();
    dispatch(removeBookAction(e.target.id));
  };

  const itemList = arrayObj.map((item) => (
    <>
      <div id={item.id} className="BookCard">
        <div className="BookCardContainer">
          <div className="BookTitle">
            {item.title}
          </div>
          <div className="AuthorTitle">
            {item.author}
          </div>
        </div>
        <button id={item.id} type="button" className="RemoveButton" onClick={handleRemoveButtton}>Remove</button>
      </div>
    </>
  ));
  return (
    <>
      <div>
        {itemList}
      </div>
    </>
  );
};

export default Book;

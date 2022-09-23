import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookAction } from '../redux/books/books';
import '../css/Book.css';
import '../css/ExternalCode.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveButton = (e) => {
    dispatch(removeBookAction(e.target.id));
  };

  const itemList = book?.map((item) => {
    const percentage = Math.floor(Math.random() * 100);
    const textToPass = `c100 p${percentage} small`;
    const textToPasss = `${percentage}%`;
    return (
      <>
        <div id={item.item_id} className="BookCard">
          <div className="one">
            <div className="one-one">
              <div className="Category">
                {item.category}
              </div>
              <div className="BookTitle">
                {item.title}
              </div>
              <div className="AuthorTitle">
                {item.author}
              </div>
              <div className="one-two">
                <button type="button" className="book-card-buttons">Comments</button>

                <button id={item.item_id} type="button" className="book-card-buttons" onClick={handleRemoveButton}>Remove</button>

                <button type="button" className="book-card-buttons">Edit</button>
              </div>
            </div>
          </div>
          <div className="two">
            <div className={textToPass}>
              <span>
                {textToPasss}
              </span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
          </div>
          <div className="one three">
            <div className="one-one">
              <div className="Category">
                Current Chapter
              </div>
              <div className="AuthorTitle">
                Chapter 17
              </div>

              <button type="submit" className="SubmitButton btn">Update Progress</button>

            </div>
          </div>

        </div>
      </>
    );
  });

  return (
    <>
      <div>
        {itemList}
      </div>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    map: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default Book;

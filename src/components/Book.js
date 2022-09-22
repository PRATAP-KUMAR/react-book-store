import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookAction } from '../redux/books/books';
import '../css/Book.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveButton = (e) => {
    dispatch(removeBookAction(e.target.id));
  };

  const itemList = book?.map((item) => (
    <>
      <div id={item.item_id} className="BookCard">
        <div className="BookCardContainer">
          <div className="BookTitle">
            {item.title}
          </div>
          <div className="AuthorTitle">
            {item.author}
          </div>
        </div>
        <button id={item.item_id} type="button" className="RemoveButton" onClick={handleRemoveButton}>Remove</button>
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

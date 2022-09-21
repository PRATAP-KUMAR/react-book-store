import { useDispatch } from 'react-redux';
import { addBookAction } from '../redux/books/books';
import '../css/Form.css';

const Form = () => {
  // const abc = useSelector((books) => books.addAndRemoveReducer);
  const dispatch = useDispatch();

  const handleAddButton = (e) => {
    const title = e.target.parentElement.firstChild.BookName.value;
    const author = e.target.parentElement.firstChild.AuthorName.value;

    e.target.parentElement.firstChild.BookName.value = '';
    e.target.parentElement.firstChild.AuthorName.value = '';

    if (title !== '' && author !== '' && /[a-zA-Z]/.test(title) && /[a-zA-Z]/.test(author)) {
      dispatch(addBookAction(title, author));
    } else {
      alert('Fields should contain atleast 1 alphabet');
    }
  };

  return (
    <>
      <div className="AddNewBook">
        <div>
          Add New Book
        </div>
        <div className="FormFields">
          <form id="Form">
            <input type="text" placeholder="Book Name" name="BookName" />
            <input type="text" placeholder="Author Name" name="AuthorName" />
          </form>
          <button type="submit" className="SubmitButton" onClick={handleAddButton}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Form;

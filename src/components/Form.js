import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBookAction } from '../redux/books/books';
import '../css/Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmitButton = (e) => {
    e.preventDefault();
    const obj = {
      item_id: uuid(),
      title,
      author,
      category: 'cagegory not yet allotted',
    };
    if (title !== '' && author !== '' && /[a-zA-Z]/.test(title) && /[a-zA-Z]/.test(author)) {
      dispatch(addBookAction(obj));
      setTitle('');
      setAuthor('');
    } else {
      alert('Fields should contain atleast 1 alphabet');
    }
  };

  const onTitleChangeHandle = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChangeHandle = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      <div className="AddNewBook">
        <div>
          Add New Book
        </div>
        <div className="FormFields">
          <form id="Form" onSubmit={handleSubmitButton}>
            <input type="text" placeholder="Book Name" name="BookName" value={title} onChange={onTitleChangeHandle} />
            <input type="text" placeholder="Author Name" name="AuthorName" value={author} onChange={onAuthorChangeHandle} />
            <button type="submit" className="SubmitButton">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;

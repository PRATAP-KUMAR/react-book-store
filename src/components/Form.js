import '../css/Form.css';

const Form = () => (
  <>
    <div className="AddNewBook">
      <div>
        Add New Book
      </div>
      <div className="FormFields">
        <form id="Form">
          <input type="text" placeholder="Book Name" />
          <input type="text" placeholder="Author Name" />
        </form>
        <button type="submit" className="SubmitButton" onClick={() => alert('Clicked')}>Submit</button>
      </div>
    </div>
  </>
);

export default Form;

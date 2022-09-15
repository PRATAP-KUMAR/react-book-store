import React from 'react';
import '../css/Book.css';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: 'REACT Book',
      author: 'REACT Author',
    };
  }

  render() {
    const { book, author } = this.state;
    return (
      <>
        <div className="BookCard">
          <div className="BookCardContainer">
            <div className="BookTitle">
              {book}
            </div>
            <div className="AuthorTitle">
              {author}
            </div>
          </div>
          <button type="button" className="RemoveButton" onClick={() => alert('Clicked')}>Remove</button>
        </div>
      </>
    );
  }
}

export default Book;

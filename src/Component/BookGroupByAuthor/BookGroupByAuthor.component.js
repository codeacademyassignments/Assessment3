import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book.component';
import './BookGroupByAuthor.component.css';

// import ReactDOM from 'react-dom';
// import RawData from '../../RawData/RawData';

class BookGroupByAuthor extends Component {
  createBookCards = (books) => {
    const bookCards = [];
    books.forEach((book, index) => {
      bookCards.push(<Book key={`${book.Name}`} bookId={book.id} liked={book.liked} rating={book.rating} title={book.Name} index={index} />);
    });
    return bookCards;
  }

  render() {
    const { books, author } = this.props;
    return (
      <section className="cardBoundBox">
        <div className="authorName">{author}</div>
        <section className="cardsByAuthor">
          {this.createBookCards(books)}
        </section>
      </section>

    );
  }
}

BookGroupByAuthor.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      rating: PropTypes.float,
      Author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  author: PropTypes.string.isRequired,
};


export default BookGroupByAuthor;

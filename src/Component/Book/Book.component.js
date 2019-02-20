import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.component.css';
import image from '../../Images/cover_image.jpeg';
import BookFooter from './BookFooter/BookFooter.component';

class Book extends Component {
  render() {
    const styleForBook = this.props.index % 2 === 0 ? 'bookOnEvenIndex' : 'bookOnOddIndex';
    return (
      <article className={styleForBook}>
        <div className="bookImage" style={{ backgroundImage: `url(${image})` }} />
        <p className="bookTitle">{this.props.title}</p>
        <BookFooter rating={this.props.rating} bookId={this.props.bookId} liked={this.props.liked} onHeartClick={(data) => { }} index={this.props.index} />
      </article>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  bookId: PropTypes.number.isRequired,
  liked: PropTypes.bool,
  index: PropTypes.number,
};

Book.defaultProps = {
  liked: false,
  index: 0,
};

export default Book;

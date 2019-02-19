import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.component.css';
import image from '../../Images/cover_image.jpeg';
import BookFooter from './BookFooter/BookFooter.component';

class Book extends Component {
  render() {
    return (
      <article className="book">
        <div className="bookImage" style={{ backgroundImage: `url(${image})` }} />
        <p className="bookTitle">{this.props.title}</p>
        <BookFooter rating={this.props.rating} bookId={this.props.bookId} liked={this.props.liked} onHeartClick={(data) => { }} />
      </article>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  bookId: PropTypes.number.isRequired,
  liked: PropTypes.bool,
};

Book.defaultProps = {
  liked: false,
};

export default Book;

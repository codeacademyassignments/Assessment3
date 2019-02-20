import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.component';
import BookGroupByAuthor from '../BookGroupByAuthor/BookGroupByAuthor.component';
import './Home.component.css';
import BookGroupByAuthorHandler from '../../Handler/BooksGroupByAuthor';

class Home extends Component {
  componentDidMount() {
    const { books, onDataFetched } = this.props;
    if (Object.keys(books).length === 0) {
      const allBookGroupByAuthor = BookGroupByAuthorHandler();
      return allBookGroupByAuthor.then((response) => {
        onDataFetched(response.data);
      });
    }
    return {};
  }

  bookGroupByAuthor = (books) => {
    const bookGroupByAuthorComponentRows = [];
    Object.keys(books).forEach((author) => {
      bookGroupByAuthorComponentRows.push(<BookGroupByAuthor key={author} books={books[author]} author={author} />);
    });
    return bookGroupByAuthorComponentRows;
  }

  render() {
    const { books } = this.props;
    if (Object.keys(books).length === 0) return (<></>);
    return (
      <section className="rootSection">
        <Header />
        <section className="mainBlock">
          {this.bookGroupByAuthor(books)}
        </section>
      </section>
    );
  }
}

Home.propTypes = {
  books: PropTypes.objectOf(PropTypes.arrayOf(
    PropTypes.shape({
      Author: PropTypes.string.isRequired,
      Name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      liked: PropTypes.bool,
    }),
  )),
  onDataFetched: PropTypes.func.isRequired,
};


Home.defaultProps = {
  books: {},
};


export default Home;

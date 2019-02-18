import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.component';
import Card from '../Card/Card.component';
import './Section.component.css';

// import ReactDOM from 'react-dom';
// import RawData from '../../RawData/RawData';

class Section extends Component {
  createRows = (blogs) => {
    const rows = [];
    blogs.forEach((blog, index) => {
      rows.push(<Card key={`${index}${blog.Name}`} bookId={blog.id} liked={blog.liked} rating={blog.rating} title={blog.Name} />);
    });
    return rows;
  }

  render() {
    console.log('here......', this.props);
    const { cards, author } = this.props;
    console.log(cards);
    return (
      <section className="cardBoundBox">
        {this.createRows(cards)}
      </section>
    );
  }


  // componentDidUpdate(prevProps) {
  //   console.log('component updated', prevProps);
  // }
}

Section.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
      id: PropTypes.number,
      rating: PropTypes.float,
      Author: PropTypes.string,
    }),
  ),
  author: PropTypes.string,
};


export default Section;

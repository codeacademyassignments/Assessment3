import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../Header/Header.component';
import Section from '../Section/Section.component';
import testData from '../../TestData/TestData';
import './Home.component.css';


// import ReactDOM from 'react-dom';
// import RawData from '../../RawData/RawData';

class Home extends Component {
  componentDidMount() {
    const { onDataStoreComplete, onDataFetched, fetchState } = this.props;
    if (!fetchState) {
      const allBookGroupByAuthor = axios.get('http://localhost:8080/allBooksWithRating');
      return allBookGroupByAuthor.then((response) => {
        onDataFetched(response.data);
        onDataStoreComplete();
      });
    }
    return {};
  }

  render() {
    const { blogs } = this.props;
    // console.log('here..', blogs);
    if (Object.keys(blogs).length === 0) return (<></>);
    return (
      <section className="rootSection">
        <Header />
        <section className="mainBlock">
          <Section cards={blogs['J K Rowling']} author="J K Rowling" />
          <Section cards={blogs['Sidney Sheldon']} author="Sidney Sheldon" />
        </section>
      </section>
    );
  }


  // componentDidUpdate(prevProps) {
  //   console.log('component updated', prevProps);
  // }
}

Home.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      readingTime: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      claps: PropTypes.number.isRequired,
      image: PropTypes.string,
    }),
  ),
  onDataStoreComplete: PropTypes.func.isRequired,
  onDataFetched: PropTypes.func.isRequired,
  fetchState: PropTypes.bool.isRequired,
};

Home.defaultProps = {
  blogs: [],
};


export default Home;

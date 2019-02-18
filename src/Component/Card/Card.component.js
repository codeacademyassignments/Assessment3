import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.component.css';
import image from '../../Images/cover_image.jpeg';
import CardFooter from './CardFooter/CardFooter.component';
// import Image from './Image/Image.component';
// import TextContent from './TextContent/TextContent.component';

class Card extends Component {
  render() {
    // const { title } = this.props;
    return (
      <article className="article">
        <div className="img" style={{ backgroundImage: `url(${image})` }} />
        <p className="title">{this.props.title}</p>
        <CardFooter rating={this.props.rating} bookId={this.props.bookId} liked={this.props.liked} onHeartClick={(data) => { alert(data); }} />
      </article>
    );
  }
}


export default Card;

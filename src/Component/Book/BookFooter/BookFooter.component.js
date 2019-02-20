import React from 'react';
import './BookFooter.component.css';
import PropTypes from 'prop-types';

const CardFooter = (props) => {
  const heartUrl = props.liked ? 'heart-red.svg' : (props.index % 2 === 0 ? 'heart-white.svg' : 'heart-black.svg');
  return (
    <div className="cardFooter">
      <div>
        <p className="rating">{props.rating}</p>
      </div>
      <div className="heartImage">
        <img
          src={require(`../../../Icons/${heartUrl}`)}
          alt="heart-black"
          className="heart"
          onClick={() => {
            props.onHeartClick(props.liked);
          }}
        />
      </div>
    </div>
  );
};

CardFooter.propTypes = {
  rating: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  index: PropTypes.number,
};

CardFooter.defaultProps = {
  index: 0,
};

export default CardFooter;

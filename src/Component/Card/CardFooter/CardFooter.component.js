import React from 'react';
import './CardFooter.component.css';

const CardFooter = (props) => {
  const heartUrl = props.liked ? 'heart-red.svg' : 'heart-black.svg';
  console.log(props);
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
            alert('clicked');
            props.onHeartClick(props.liked);
          }}
        />
      </div>
    </div>
  );
};

CardFooter.defaultProps = {
  liked: false,
};

export default CardFooter;

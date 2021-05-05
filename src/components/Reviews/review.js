import React from 'react';
import Rate from '../Rate';

const Review = ({ user, text, rating }) => {
  return (
    <div>
      <div>{user}</div>
      <div>{text}</div>
      <Rate rate={rating} />
    </div>
  );
};

export default Review;

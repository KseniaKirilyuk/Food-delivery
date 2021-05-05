import React from 'react';
import Review from './review';
const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};
export default Reviews;

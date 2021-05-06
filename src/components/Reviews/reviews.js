import React from 'react';
import Review from './Review';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequered,
    }).isRequired
  ).isRequired,
};
export default Reviews;

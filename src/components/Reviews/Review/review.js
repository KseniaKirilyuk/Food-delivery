import React from 'react';
import PropTypes from 'prop-types';
import Rate from '../../Rate';

const Review = ({ user, text, rating }) => {
  return (
    <div>
      <div>{user}</div>
      <div>{text}</div>
      <Rate rate={rating} />
    </div>
  );
};
Review.propTypes = {
  test: PropTypes.string,
  rating: PropTypes.number.isRequired,
};
Review.defaultProps = {
  user: 'Anonymous',
};
export default Review;

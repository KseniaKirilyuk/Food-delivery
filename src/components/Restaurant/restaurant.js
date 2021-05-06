import React, { useMemo } from 'react';
import Menu from '../Menu';
import Reviews from '../Reviews';
import Rate from '../Rate';
import PropTypes from 'prop-types';
import { restaurants } from '../../fixtures';

const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
  const averageRating = useMemo(() => {
    const totalRate = reviews.reduce((sum, { rating }) => sum + rating, 0);
    return Math.round(totalRate / reviews.length);
  }, [reviews]);
  return (
    <div>
      {name}
      <Rate rate={averageRating} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }),
};
export default Restaurant;

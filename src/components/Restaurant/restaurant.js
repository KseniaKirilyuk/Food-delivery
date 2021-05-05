import React, { useMemo } from 'react';
import Menu from '../Menu';
import Reviews from '../Reviews';
import Rate from '../Rate';
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

export default Restaurant;

import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Restaurant from '../Restaurant';

const Restaurants = ({ restaurants }) => {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );
  return (
    <div>
      <Navigation onRestaurantClick={setActiveId} restaurants={restaurants} />
      {activeId.name}
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect((state) => ({
  restaurants: state.restaurants,
}))(Restaurants);

import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ restaurants, onRestaurantClick }) => {
  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <button key={id} onClick={() => onRestaurantClick(id)}>
          {name}
        </button>
      ))}
    </div>
  );
};

Navigation.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRestaurantClick: PropTypes.func.isRequired,
};
export default Navigation;
//TODO useCallBack for onRestaurantClick

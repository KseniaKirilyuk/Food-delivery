import React from 'react';

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
export default Navigation;
//TODO useCallBack for onRestaurantClick

import React from 'react';

const Navigation = (props) => {
  return (
    <div>
      {props.restaurants.map((item) => (
        <button key={item.id} onClick={() => props.onRestaurantClick(item.id)}>
          {item.name}
        </button>
      ))}
    </div>
  );
};
export default Navigation;

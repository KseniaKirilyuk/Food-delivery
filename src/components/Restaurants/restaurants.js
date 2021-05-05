import React, { useState, useMemo } from 'react';
import Navigation from '../Navigation';
import Restaurant from '../Restaurant';

const Restaurants = (props) => {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, props.restaurants]
  );
  return (
    <div>
      <Navigation
        onRestaurantClick={setActiveId}
        restaurants={props.restaurants}
      />
      {activeId.name}
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};

export default Restaurants;

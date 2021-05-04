import React, { useState, useMemo } from 'react';
import Menu from '../Menu';
import Navigation from '../Navigation';

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
      <Menu menu={activeRestaurant.menu} />
    </div>
  );
};

export default Restaurants;

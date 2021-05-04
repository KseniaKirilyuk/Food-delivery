import React from 'react';
import Product from '../Product';

const Menu = (props) => {
  return (
    <div>
      {props.menu.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};
export default Menu;

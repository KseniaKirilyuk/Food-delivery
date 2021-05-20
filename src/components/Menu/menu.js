import React from 'react';
import Product from '../Product';
import PropTypes from 'prop-types';
import Basket from '../Basket';

const Menu = ({ menu }) => {
  return (
    <div>
      {menu.map((item) => (
        <Product key={item.id} product={item} />
      ))}
      <Basket />
    </div>
  );
};

Menu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default Menu;

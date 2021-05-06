import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import useAmount from '../../hooks/use-amount';

const Product = ({ product }) => {
  const { decrement, increment, amount } = useAmount(0);

  return (
    <div>
      {product.name}
      <div>${product.price}</div>
      <Button amount={amount} onButtonClick={{ decrement, increment }} />
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  amount: PropTypes.number,
};
export default Product;

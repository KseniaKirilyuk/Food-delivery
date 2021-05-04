import React, { useState } from 'react';
import Button from '../Button';
import useAmount from '../../hooks/use-amount';

const Product = (props) => {
  const { decrement, increment, amount } = useAmount(0);

  return (
    <div>
      {props.product.name}
      <div>${props.product.price}</div>
      <Button amount={amount} onButtonClick={{ decrement, increment }} />
    </div>
  );
};
export default Product;

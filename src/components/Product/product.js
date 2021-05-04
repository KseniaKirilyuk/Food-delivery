import React from 'react';

const Product = (props) => {
  return (
    <div>
      {props.product.name}
      <div>${props.product.price}</div>
    </div>
  );
};
export default Product;

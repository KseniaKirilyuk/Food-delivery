import React from 'react';
import Button from '../Button';
import { increment, decrement } from '../../redux/actions';
import { connect } from 'react-redux';

const BasketItem = ({ product, amount, subtotal, increment, decrement }) => {
  return (
    <div>
      <div>{product.name}</div>
      <div>{amount}</div>
      <Button onClick={decrement} />
      <span>{amount}</span>
      <Button onClick={increment} />
      <p>{subtotal} $</p>
      {/* <Button onClick={remove}/> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
});

export default connect(null, mapDispatchToProps)(BasketItem);

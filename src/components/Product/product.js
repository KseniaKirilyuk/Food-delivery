import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/actions';
import PropTypes from 'prop-types';
import Button from '../Button';
import useAmount from '../../hooks/use-amount';

const Product = ({ product, amount, increment, decrement }) => {
  //const { decrement, increment, amount } = useAmount(0);
  console.log('amount', amount);
  console.log('product', product);

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

const mapStateToProps = (state, props) => ({
  // state-is goint toupdate the component when store changed, props - when new params come
  amount: state.order[props.product.id] || 0, //?как узнает какой продукт имеет idб если мы это нигде не указали
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);

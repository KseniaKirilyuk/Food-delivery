import React from 'react';
import { connect } from 'react-redux';
import BasketItem from '../BasketItem';

const Basket = ({ title = 'Basket', total, productList }) => {
  return (
    <div>
      <div>{title}</div>
      {productList.map(({ product, amount, subtotal }) => (
        <BasketItem product={product} amount={amount} subtotal={subtotal} />
      ))}
      <div>Total : ${total}</div>
      <div>Checkout</div>
    </div>
  );
};

export default connect((state) => {
  const allProducts = state.restaurants.flatMap(
    (restaurant) => restaurant.menu
  );
  const productList = Object.keys(state.order)
    .filter((productId) => state.order[productId] > 0)
    .map((productId) => allProducts.find((product) => product.id === productId))
    .map((product) => ({
      product,
      amount: state.order[product.id],
      subtotal: state.order[product.id] * product.price,
    }));
  const total = productList.reduce((acc, cur) => acc + cur.subtotal, 0);

  return {
    total,
    productList,
  };
})(Basket);

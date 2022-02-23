import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetails from './ProductDetails';
import { Provider } from 'react-redux';
import store from "../../redux/store";
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom'

test('Product details should be render', () => {
  render(
  <Provider store={store}>
    <ProductDetails location={{ state: {}}}/>
  </Provider>)
    expect(screen.getByTestId('prdct-dl')).toBeInTheDocument()
})

test('Quantity inputbox should render and defaul value is 1', () => {
  render(
    <Provider store={store}>
    <ProductDetails location={{ state: 
  {
      Id: 3,
      imageSrc: require('../../assets/img/shop/shop-3.jpg'),
      name: 'Product 3',
      price: '$25.00'
  }}}/>
  </Provider>)
  const qtyinputEl = screen.getByTestId("qty-input");
  expect(qtyinputEl).toBeInTheDocument();
  expect(qtyinputEl).toHaveAttribute("type", "number");
  expect(screen.getByTestId("qty-input")).toHaveValue(1);
})
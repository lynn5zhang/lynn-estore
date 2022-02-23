import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from './index';
import { Provider } from 'react-redux';
import store from "../../redux/store";
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom'


test('Product list component should be render', () => {
  render(
  <Provider store={store}>
    <Product />
  </Provider>)
    expect(screen.getByTestId('product')).toBeInTheDocument()
})


import React from 'react';
import { render, screen } from '@testing-library/react';
import MainContainer from './index';
import { Provider } from 'react-redux';
import store from "../../redux/store";
import '@testing-library/jest-dom'


test('Main Container full rendering with sidebar and products', () => {
  render(
    <Provider store={store}>
      <MainContainer />
    </Provider>
  )
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('product')).toBeInTheDocument();
  })
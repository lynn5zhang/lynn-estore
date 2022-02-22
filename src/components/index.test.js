import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './index';
import { Provider } from 'react-redux';
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";

import '@testing-library/jest-dom'


test('Landing page full rendering', () => {
  const lpEl = render(

  <Provider store={store}>
    <BrowserRouter>
    <LandingPage/>
    </BrowserRouter>
  </Provider> 
  )
    expect(screen.getByTestId('head')).toBeInTheDocument();
})
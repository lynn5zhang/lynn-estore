import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from "./redux/store";

import '@testing-library/jest-dom'


test('App Component full rendering', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>  
  )
    expect(screen.getByTestId('loginform')).toBeInTheDocument()
})


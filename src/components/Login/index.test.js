import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './index';
import { Provider } from 'react-redux';
import store from "../../redux/store";
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom'


test('Log in form display', () => {
  render(
  <Provider store={store}>
    <Login/>
  </Provider>)
    expect(screen.getByTestId('loginform')).toBeInTheDocument()
})

test('Google log in form display and button enable', () => {
  render(
  <Provider store={store}>
    <Login/>
  </Provider>)
    expect(screen.getByText('Login with Google')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeDisabled()
})

test('Render email input', () => {
  render(
  <Provider store={store}>
    <Login/>
  </Provider>)
  const usninputEl = screen.getByTestId("usn-input");
  expect(usninputEl).toBeInTheDocument();
  expect(usninputEl).toHaveAttribute("type", "email");
})

test('pass valid email to test email input field', () => {
  render(
  <Provider store={store}>
    <Login/>
  </Provider>)
  const usninputEl = screen.getByTestId("usn-input");
  userEvent.type(usninputEl, "test@mail.com");
  expect(screen.getByTestId("usn-input")).toHaveValue("test@mail.com");
  expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
})
    

test('Render password input', () => {
  render(
  <Provider store={store}>
    <Login/>
  </Provider>)
    const pswdinputEl = screen.getByTestId("pswd-input");
    expect(pswdinputEl).toBeInTheDocument();
    expect(pswdinputEl).toHaveAttribute("type", "password");
})

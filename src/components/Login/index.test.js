import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './index';
import { Provider } from 'react-redux';
import store from "../../redux/store";

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

test('Username input box works', () => {
  render(
  <Provider store={store}>
    <Login/>
  </Provider>)
    expect(screen.getByTestId('loginform')).toBeInTheDocument()
    expect(screen.getByText('Login with Google')).toBeInTheDocument()
})

test('Username input box works', () => {
  render(
  <Provider store={store}>
    <Login/>
  </Provider>)
    expect(screen.getByTestId('loginform')).toBeInTheDocument()
    expect(screen.getByText('Login with Google')).toBeInTheDocument()
})




// test('has correct welcome text', () => {
//   render(<Welcome firstName="John" lastName="Doe" />)
//   expect(screen.getByRole('heading')).toHaveTextContent('Welcome, John Doe')
// })

// import React from "react";
// import { mount } from "enzyme";
// // import "../../enzymeConfig";
// import Login from "./index";
// import { Provider } from "react-redux";

// describe("Test login form", function() {
//   let wrapper;

//   it("test username input", function() {
//     wrapper = mount(
//         <Provider store={store}>
//         <Login/>
//         </Provider>
//         );
//     wrapper.find('input[type="text"]').simulate("change", {
//       target: { id: "username", value: "lynn" }
//     });
//     expect(wrapper.state("username")).toEqual("lynn");
//   });

//   // it("test password input", function() {
//   //   wrapper = mount(
//   //   <Provider store={store}>
//   //   <Login/>
//   //   </Provider>
//   //   );
//   //   wrapper.find('input[type="password"]').simulate("change", {
//   //     target: { id: "password", value: "123" }
//   //   });
//   //   expect(wrapper.state("password")).toEqual("123");
//   // });

//   // it("login check with right data", () => {
//   //   wrapper = mount(<Login />);
//   //   wrapper
//   //     .find('input[type="text"]')
//   //     .simulate("change", { target: { id: "username", value: "world" } });
//   //   wrapper
//   //     .find('input[type="password"]')
//   //     .simulate("change", { target: { id: "password", value: "123" } });
//   //   wrapper.find("button").simulate("click");
//   //   expect(wrapper.state("loggedIn")).toBe(true);
//   // });
// });

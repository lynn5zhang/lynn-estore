import React from 'react';
import { render,screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import TopMenu from './index';
import store from "../../redux/store";


test("Top Menu component full rendering",()=>{
    store.dispatch({ type: "" });
    render(
    <Provider store={store}>
        <BrowserRouter>
        <TopMenu/>
        </BrowserRouter>
    </Provider>);

    const topmenuEl = screen.getByTestId("topmenu");
    expect(topmenuEl).toBeInTheDocument();
    expect(topmenuEl).not.toBeNull();
})

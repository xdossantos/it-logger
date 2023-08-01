import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";
import React from "react";

export const renderWithWrapper = (
    ui,
    {
        initialState = {},
        store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
        ...renderOptions
    } = {}
) => {
    const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

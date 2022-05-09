import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider} from "react-redux";
import {createStore} from "redux";
import AppComponent from "./components/AppComponent";
import {appReducer} from './store/reducers';

export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';

const store = createStore(appReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <AppComponent />
    </Provider>
);



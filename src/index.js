import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import store from "./store/redux-store";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./store/store-context";

 let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    renderEntireTree(state);
} );

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import store from "./store/redux-store";
import App from './App';
import {BrowserRouter} from "react-router-dom";

 let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    renderEntireTree(state);
} );

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import store from "./state";
import App from './App';
import {BrowserRouter} from "react-router-dom";

 let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPostValue={store.updateNewPostValue.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

serviceWorker.unregister();

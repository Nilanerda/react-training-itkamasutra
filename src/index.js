import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import state, {subscribe, addPost, updateNewPostValue} from "./state";
import App from './App';
import {BrowserRouter} from "react-router-dom";

 let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostValue={updateNewPostValue}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

renderEntireTree(state);

subscribe(renderEntireTree);

serviceWorker.unregister();

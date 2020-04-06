import React from 'react';
import './App.scss';
import Header from "./components/MainPage/Header/Header";
import Navigation from "./components/MainPage/Navigation/Navigation";
import ProfilePage from "./components/MainPage/ProfilePage/ProfilePage";
import DialogPage from "./components/MainPage/DialogPage/DialogPage";
import {Route} from "react-router-dom";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <main className="app-main">
                <Route path='/profile'
                       render={() => <ProfilePage
                           store={props.store}
                           />}/>
                <Route path='/messages'
                       render={() => <DialogPage
                           dialogPageState={props.state.dialogPage}
                           dispatch={props.dispatch}/>}/>
            </main>
        </div>
    );
}

export default App

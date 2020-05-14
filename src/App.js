import React from 'react';
import './App.scss';
import Header from "./components/MainPage/Header/Header";
import Navigation from "./components/MainPage/Navigation/Navigation";
import ProfilePageContainer from "./components/MainPage/ProfilePage/ProfilePageContainer";
import DialogPage from "./components/MainPage/DialogPage/DialogPage";
import UsersPage from "./components/MainPage/UsersPage/UsersPage";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <main className="app-main">
                <Route path='/profile'
                       render={() => <ProfilePageContainer />}/>
                <Route path='/messages'
                       render={() => <DialogPage />}/>
                <Route path='/users'
                       render={() => <UsersPage />}/>
            </main>
        </div>
    );
}

export default App

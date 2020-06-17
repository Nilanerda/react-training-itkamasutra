import React from 'react';
import './App.scss';
import {Route} from "react-router-dom";
import HeaderContainer from "./components/MainPage/Header/HeaderContainer";
import ProfilePageContainer from "./components/MainPage/ProfilePage/ProfilePageContainer";
import UsersPageContainer from "./components/MainPage/UsersPage/UsersPageContainer";
import Navigation from "./components/MainPage/Navigation/Navigation";
import DialogPage from "./components/MainPage/DialogPage/DialogPage";

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navigation/>
            <main className="app-main">
                <Route path='/profile/:userId?'
                       render={() => <ProfilePageContainer />}/>
                <Route path='/messages'
                       render={() => <DialogPage />}/>
                <Route path='/users'
                       render={() => <UsersPageContainer />}/>
            </main>
        </div>
    );
}

export default App

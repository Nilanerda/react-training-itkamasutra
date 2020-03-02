import React from 'react';
import './App.scss';
import Header from "./components/MainPage/Header/Header";
import Navigation from "./components/MainPage/Navigation/Navigation";
import ProfilePage from "./components/MainPage/ProfilePage/ProfilePage";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <ProfilePage/>
        </div>
    );
}

export default App

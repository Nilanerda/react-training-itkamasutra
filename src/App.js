import React from 'react';
import './App.scss';
import Header from "./components/Main-page/Header/Header";
import Navigation from "./components/Main-page/Navigation/Navigation";
import ProfilePage from "./components/Main-page/Profile-page/Profile-page";

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

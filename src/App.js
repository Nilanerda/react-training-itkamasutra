import React from 'react';
import './App.scss';
import Header from "./components/Main-page/Header/Header";
import Navigation from "./components/Main-page/Navigation/Navigation";
import Profile from "./components/Main-page/Profile-page/Profile/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <Profile/>
        </div>
    );
}

export default App

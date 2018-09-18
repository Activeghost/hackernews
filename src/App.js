import React, { Component } from 'react';
import './App.css';
import TimerComponent from "./components/TimerComponent";
import FrontPage from "./components/FrontPage";
import Items from "./components/Items";

export default class App extends Component {
    render() {
        let element = (
            <div>
                <FrontPage />
                <TimerComponent />
                <Items />
            </div>
        );

        return element;
    }
}
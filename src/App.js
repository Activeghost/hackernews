import React, { Component } from 'react';
import './App.css';
import TimerComponent from './components/TimerComponent';
import FrontPage from "./components/FrontPage";
import Items from "./components/Items";

import {registerObserver} from "react-perf-devtool";
registerObserver();

export default class App extends Component {
    render() {
        return (
            <div>
                <FrontPage/>
                <TimerComponent/>
                <Items/>
            </div>
        );
    }
}
import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import * as ReactDOM from "react-dom";

export default class FrontPage extends Component {
    render() {
        const message = "Welcome to the HackerNews Network";
        const logoSrc = logo;
        const intro = "your most trusted source for fake news...";

        let element = (
            <div className="App">
                <header className="App-header">
                    <img src={logoSrc} className="App-logo" alt="the Logo"></img>
                    <h1 className="App-title">{message}</h1>
                </header>
                <p className='App-Intro'>{intro}</p>
            </div>
        );

        return element;
    }
}

ReactDOM.render(<FrontPage/>, document.getElementById("root"));;
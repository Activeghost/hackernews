import React, { Component } from 'react';
import '../App.css';
import * as ReactDOM from "react-dom";

export default class TimerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date().toLocaleTimeString()};
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    // clear the interval here or you will leak memory
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className='Timer'><p className='Timer-text'>The local time is: {this.state.time}</p></div>
        )
    }
}

ReactDOM.render(<TimerComponent/>, document.getElementById("root"));;
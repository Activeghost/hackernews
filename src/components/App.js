import React, { Component } from 'react';
import TimerComponent from './TimerComponent';
import FrontPage from "./FrontPage";

import '../App.css';
import Table from "./Table";

const list = [
    {
        title: "React",
        url: "https://facebook.github.io/react",
        author: "Jordan Walke",
        num_comments: 5,
        points: 4,
        objectId: 0
    },
    {
        title: "Redux",
        url: "https://github.com/reactjs/redux",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectId: 1
    }
];

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: list,
            searchTerm: ''
        };
    }

    onDismiss = (id) => {
        const isNotId = function isNotId(item) {
            return item.objectId !== id;
        };

        const updatedList = this.state.list.filter(isNotId);

        this.setState({ list: updatedList});
    };

    onSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        const {searchTerm, list} = this.state;
        return (
            <div>
                <FrontPage/>
                <TimerComponent/>
                <Search value={searchTerm} onChange={this.onSearchChange}>Search: </Search>
                <Table list={list}
                       pattern={searchTerm}
                       onDismiss={this.onDismiss}/>
            </div>
        );
    }
}


const Search = ({value, onChange, children}) =>
    <form>
        {children}<input type="text" value={value} onChange={onChange}/>
    </form>;

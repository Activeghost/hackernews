import React, { Component } from 'react';
import './../App.css';
import NewsItem from "./NewsItem";
import ErrorBoundary from "./ErrorBoundary";

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

export default class Items extends Component {
    constructor(props) {
        super (props);

        this.state = {
            list: list
        };

    }

    onDismiss = (id) => {
        const isNotId = function isNotId(item) {
            return item.objectId !== id;
        };

        const updatedList = this.state.list.filter(isNotId);

        this.setState({ list: updatedList});
    };

    renderNewsItem = item => <NewsItem key={item.objectId} item={item} onClick={this.onDismiss}/>;

    render() {
        return <div><ErrorBoundary>{this.state.list.map(this.renderNewsItem)}</ErrorBoundary></div>;
    }
}
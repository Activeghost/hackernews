import React, { Component } from 'react';
import './../App.css';
import NewsItem from "./NewsItem";
import ErrorBoundary from "./ErrorBoundary";

export default class Table extends Component {

    renderNewsItem = item => <NewsItem key={item.objectId} item={item} onClick={this.props.onDismiss}/>;

    render() {
        const {list, pattern} = this.props;

        return (
        <div>
            <ErrorBoundary>
                {
                    list
                        .filter(match(pattern))
                        .map(this.renderNewsItem)
                }
            </ErrorBoundary>
        </div>
        );
    }
}

const match = searchTerm => item =>
    item.title
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
import React, { Component } from 'react';
import './../App.css';
import NewsItem from "./NewsItem";
import ErrorBoundary from "./ErrorBoundary";

export default const Table = (list, pattern, onDismiss) => {
    const renderNewsItem = item => <NewsItem key={item.objectId} item={item} onClick={onDismiss}/>;
    const match = searchTerm => item =>
        item.title
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase());

    return (
        <div>
            <ErrorBoundary>
                list
                .filter(match(pattern))
                .map(renderNewsItem)
                }
            </ErrorBoundary>
        </div>);
};
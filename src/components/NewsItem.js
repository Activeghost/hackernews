import React from 'react';
import './../App.css';
import Button from "./Button";

const NewsItem = (item, onDismiss) =>
    <div key={item.objectId}>
                                <span>
                                    <a href={item.url}>{item.title}</a>
                                </span>
        <span>{this.props.item.author}</span>
        <span>{this.props.item.num_comments}</span>
        <span>{this.props.item.points}</span>
        <span>
                        <Button
                            className=""
                            onClick={onDismiss}
                            type="button">
                                Dismiss
                        </Button>
                        </span>
    </div>;

export default NewsItem;
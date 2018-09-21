import React, { Component } from 'react';
import './../App.css';
import PropTypes from "prop-types";
import Button from "./Button";


class NewsItem extends Component {
    onDismiss = () => this.props.onClick(this.props.item.objectId);

    render() {
        return (
                <div key={this.props.item.objectId}>
                                <span>
                                    <a href={this.props.item.url}>{this.props.item.title}</a>
                                </span>
                    <span>{this.props.item.author}</span>
                    <span>{this.props.item.num_comments}</span>
                    <span>{this.props.item.points}</span>
                    <span>
                        <Button
                            className=""
                            onClick={this.onDismiss}
                            type="button">
                                Dismiss
                        </Button>
                        </span>
                </div>
        );
    }
}

NewsItem.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default NewsItem;
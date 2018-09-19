import React, { Component } from 'react';
import './../App.css';
import PropTypes from "prop-types";


class NewsItem extends Component {
    onDismiss = () => this.props.onClick(this.props.item.objectId);

    render() {
        return <div>
            {
                <div key={this.props.item.objectId}>
                                <span>
                                    <a href={this.props.item.url}>{this.props.item.title}</a>
                                </span>
                    <span>{this.props.item.author}</span>
                    <span>{this.props.item.num_comments}</span>
                    <span>{this.props.item.points}</span>
                    <span>
                            <button
                                onClick={this.onDismiss}
                                type="button">
                                Dismiss
                            </button>
                        </span>
                </div>
            }
        </div>;
    }
}

NewsItem.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default NewsItem;
import React, { Component } from 'react';
import './../App.css';

export default class Button extends Component {
    render() {
        const {
            onClick,
            className,
            children,
            type
        } = this.props;

        return (
            <button
                onClick={onClick}
                className={className}
                type={type} >
                {children}
            </button>
        );
    }
}
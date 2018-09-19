import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  error: null, errorInfo: null};
    }

    componentDidCatch(error, errorInfo) {
        // Display fallback UI
        this.setState(
            {
                error: error,
                info: errorInfo
            });
    }

    render() {
        if (this.state.error !== null && this.state.error.toString()) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <div><p>Error: {this.state.error}</p></div>
                    <div><p>Info: {this.state.errorInfo}</p></div>
                </div>
            );
        }

        return this.props.children;
    }
}
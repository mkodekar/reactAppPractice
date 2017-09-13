import React from 'react';

class StateComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Header from state...",
            content: "Content from state...."
        };
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                this.state.header
            ),
            React.createElement(
                "p",
                null,
                this.state.content
            )
        );
    }
}

export default StateComponent;
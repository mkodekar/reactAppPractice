import React from 'react';

class DefaultPropertyComponent extends React.Component {

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                this.props.headerProp
            ),
            React.createElement(
                "h3",
                null,
                this.props.contentProp
            )
        );
    }
}

DefaultPropertyComponent.defaultProps = {
    headerProp: "Default header prop",
    contentProp: "Default content prop"
};

export default DefaultPropertyComponent;
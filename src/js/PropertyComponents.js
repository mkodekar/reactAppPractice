import React from 'react';

class PropertyComponents extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                this.props.headerprop
            ),
            React.createElement(
                'h2',
                null,
                this.props.contentprop
            )
        );
    }
}

export default PropertyComponents;
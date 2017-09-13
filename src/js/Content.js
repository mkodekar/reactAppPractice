import React from 'react';

class Content extends React.Component {

    render() {

        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                ' This is a content '
            )
        );
    }
}

export default Content;
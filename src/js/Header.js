import React from 'react';

class Header extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'This is a header'
            )
        );
    }
}

export default Header;
import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import StateComponent from './StateComponent.jsx';
import PropertyComponents from './PropertyComponents.jsx';
import DefaultPropertyComponent from './DefaultPropertyComponent.jsx';
import ReCaptcha from './ReCaptcha.jsx';
import StateFulComponent from './StateFulComponent.jsx';

class App extends React.Component {
    render() {
        var i = 1;
        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        };
        return React.createElement(
            'div',
            null,
            React.createElement(Header, null),
            React.createElement(Content, null),
            React.createElement(StateComponent, null),
            React.createElement(PropertyComponents, { headerprop: 'Header from property', contentprop: 'Content from property' }),
            React.createElement(DefaultPropertyComponent, null),
            React.createElement(ReCaptcha, null),
            React.createElement(StateFulComponent, null)
        );
    }
}

export default App;
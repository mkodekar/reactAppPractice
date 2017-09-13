import React from 'react';


class DefaultPropertyComponent extends React.Component {

    render() {
        return(
            <div>
            <h1>{this.props.headerProp}</h1>
            <h3>{this.props.contentProp}</h3>
            </div>
        );
    }
}

DefaultPropertyComponent.defaultProps =  {
    headerProp: "Default header prop",
    contentProp: "Default content prop"
}

export default DefaultPropertyComponent;
import React from 'react'

class PropertyComponents extends React.Component {
    render() {
        return(
            <div>
            <h1>{this.props.headerprop}</h1>
            <h2>{this.props.contentprop}</h2>
            </div>
        );
    }
}

export default PropertyComponents
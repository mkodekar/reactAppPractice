import React from 'react'

class ValidatingProps extends React.Component {

    render() {
        return(
            <div>
            <h3>Array: {this.props.propArray}</h3>
            <h3>Bool: {this.props.propBool ? "True " : "False..."}</h3>
            <h3>func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber} </h3>
            <h3>String: {this.props.propString}</h3>
            <h3>Object: {this.props.propObject.propobject1}</h3>
            <h3>Object: {this.props.propObject.propobject2}</h3>
            <h3>Object: {this.props.propObject.propobject3}</h3>
            </div>
        );
    }
}

ValidatingProps.propTypes = {
    propArray: React.PropTypes.array.isRequired,
    propBool: React.PropTypes.bool.isRequired,
    propFunc: React.PropTypes.func,
    propNumber: React.PropTypes.number,
    propString: React.PropTypes.string,
    propObject: React.PropTypes.object
}

ValidatingProps.defaultProps = {
    propArray: [1,2,3,4,5,6],
    propBool: true,
    propFunc: function(e){return e},
    propNumber: 1,
    propString: "String value of ......",
    propObject: {
        propobject1: "object 1",
        propobject2: "object 2",
        propobject3: "object 3"
    }
}

export default ValidatingProps;
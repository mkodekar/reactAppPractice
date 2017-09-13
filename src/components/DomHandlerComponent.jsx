import React from 'react';
import ReactDOM from 'react-dom';

class DomHandlerComponent extends React.Component {
    constructor() {
        super();
        this.findDomNode = this.findDomNode.bind(this);
    };


    findDomNode() {
        var myDiv = document.getElementById("node");
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    };

    render() {
        return(
            <div>
            <button onClick= {this.findDomNode}>Find Node </button>
            <div id = 'node'>My Node</div>
            </div>
        );
    }
}

export default DomHandlerComponent;
import React from 'react';

class StateComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            header: "Header from state...",
            content: "Content from state...."
        }
    }

    render() {
        return(
            <div>
            <h1>{this.state.header}</h1>
            <p>{this.state.content}</p>
            </div>
        );
    }
}

export default StateComponent
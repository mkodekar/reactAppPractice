import React from 'react';


class TheSetStateExample extends React.Component {

    constructor() {
        super();

        this.state = {
            data: []
        }

        this.setHandler = this.setHandler.bind(this);
    };


    setHandler() {
        var item = "set state ....";
        var itemsArray = this.state.data;
        itemsArray.push(item)
        this.setState({data: itemsArray});
    };

    render() {
        return (
            <div>
            <button onClick = {this.setHandler}>update state</button>
            <h4>State Array: {this.state.data}</h4>
            </div>
        );
    }
}

export default TheSetStateExample;
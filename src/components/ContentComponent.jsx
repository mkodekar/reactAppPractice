import React from 'react';


class ContentComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 0
        }

        this.setNewNumber = this.setNewNumber.bind(this);
    };


    setNewNumber() {
        this.setState({data: this.state.data + 1});
    }


    render() {
        return(
            <div>
            <button onClick = {this.setNewNumber}> Increase number</button>
            <Context myNumber = {this.state.data}></Context>
            </div>
        );

    }
}


class Context extends React.Component {
    componentWillMount() {
        console.log("Will mount called");
    }

    componentDidMount() {
        console.log("Did mount called");
    }


    componetWillReceiveProps(newProps) {
        console.log("Component will receive new props");
    }

    shouldComponentUpdate (nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProp, nextState) {
        console.log("Component will update");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update");
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }
    

    render() {
        return(
            <div>
            <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default ContentComponent;
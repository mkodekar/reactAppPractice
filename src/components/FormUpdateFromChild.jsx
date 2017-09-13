import React from 'react';

class FormUpdateFromChild extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: "Initial state"
        };

        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        this.setState({data: e.target.value});
    }

    render() {
        return(
            <div>
            <Child dataProp = {this.state.data} updateProp = {this.updateState}></Child>
            </div>
        );
    }
}

class Child extends React.Component {
    render() {
        return(
            <div>
            <input type = "text" value = {this.props.dataProp}
             onChange = {this.props.updateProp} />
             <h3>{this.props.dataProp}</h3>
            </div>
        );
    }
}

export default FormUpdateFromChild;
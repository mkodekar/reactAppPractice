import React from 'react';

class StateFulComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{
                id: 1,
                name: "Chealsea",
                age: "29 years"
            }, {
                id: 2,
                name: "Karl",
                age: "24 Years"
            }, {
                id: 3,
                name: "Daniel",
                age: "28 Years"
            }, {
                id: 4,
                name: "Charlie",
                age: "30 Years"
            }]
        };
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(Header, null),
            React.createElement(
                "table",
                null,
                React.createElement(
                    "tbody",
                    null,
                    this.state.data.map((person, i) => React.createElement(TableRow, { key: i,
                        data: person }))
                )
            )
        );
    }
}

class Header extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Stateful example"
            )
        );
    }
}

class TableRow extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    this.props.data.id
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.data.name
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.data.age
                )
            )
        );
    }
}

export default StateFulComponent;
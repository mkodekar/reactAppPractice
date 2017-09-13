import React from 'react';

class StateFulComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    name: "Chealsea",
                    age: "29 years"
                },

                {
                    id: 2,
                    name: "Karl",
                    age: "24 Years"
                },

                {
                    id: 3,
                    name: "Daniel",
                    age: "28 Years"
                },

                {
                    id: 4,
                    name: "Charlie",
                    age: "30 Years"
                }
            ]
        }
    }

    render() {
        return(
            <div>
            <Header />
            <table>
            <tbody>
            {this.state.data.map((person , i) => <TableRow key = {i}
                                             data = {person}/>)}
            </tbody>
            </table>
            </div>
        );
    }
}


class Header extends React.Component {
    render() {
        return(
            <div>
            <h1>Stateful example</h1>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return(

            <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default StateFulComponent
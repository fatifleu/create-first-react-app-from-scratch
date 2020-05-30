import React, { Component } from 'react';

class Counter extends Component {

    //object to set all the data of this component
    state = {
        count: 0
    };

    styles = {
        fontSize: '30px',
        fontWeight: 'bold'
    };

    render() {
        return (
            <div>
                <span style={this.styles} className="badge badge-primary m-2" >{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>);
    }

    formatCount() {
        const { count } = this.state;

        return count === 0 ? <span>Zero</span> : count;
    }
}

export default Counter;
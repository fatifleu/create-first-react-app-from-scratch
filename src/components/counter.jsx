import React, { Component } from 'react';

class Counter extends Component {

    //object to set all the data of this component
    state = {
        count: 0
    };



    render() {
        return (
            <div>
                <span style={{ fontSize: 50 }} className="badge badge-primary m-2" >{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>);
    }

    formatCount() {
        const { count } = this.state;

        return count === 0 ? <span>Zero</span> : count;
    }
}

export default Counter;
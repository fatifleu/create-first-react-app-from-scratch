import React, { Component } from 'react';

class Counter extends Component {

    //object to set all the data of this component
    state = {
        count: 0
    };

    render() {
        return (
            <div>
                <span className="badge badge-primary" >{this.formatCount()}</span>
                <button>Increment</button>
            </div>);
    }

    formatCount() {
        const { count } = this.state;

        return count === 0 ? <span>Zero</span> : count;
    }
}

export default Counter;
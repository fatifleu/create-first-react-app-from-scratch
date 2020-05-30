import React, { Component } from 'react';

class Counter extends Component {

    //object to set all the data of this component
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };

    render() {
        return (
            <React.Fragment>
                <img src={this.state.imageUrl} alt="" />
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>);
    }

    formatCount() {
        const { count } = this.state;

        return count === 0 ? <span>Zero</span> : count;
    }
}

export default Counter;
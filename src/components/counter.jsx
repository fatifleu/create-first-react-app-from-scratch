import React, { Component } from 'react';

class Counter extends Component {

    //object to set all the data of this component
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };



    render() {

        return (
            <div>
                <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={this.handleIncrement}
                >
                    Increment
                </button>
            </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;

        return count === 0 ? <span>Zero</span> : count;
    }

    handleIncrement = () => {
        console.log("incremented", this)
        this.setState({ count: this.state.count + 1 })
    }
}

export default Counter;
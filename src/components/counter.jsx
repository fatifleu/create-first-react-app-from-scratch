import React, { Component } from 'react';

class Counter extends Component {

    //object to set all the data of this component
    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };



    render() {

        return (
            <div>
                <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => this.handleIncrement({ id: 1 })}
                >
                    Increment
                </button>
            </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;

        return value === 0 ? <span>Zero</span> : value;
    }

    handleIncrement = product => {
        console.log("incremented", product)
        this.setState({ value: this.state.value + 1 })
    }
}

export default Counter;
import React, { Component } from 'react';

class Counter extends Component {

    //object to set all the data of this component
    state = {
        count: 0,
        tags: []
    };

    renderTags() {
        if (this.state.tags.length === 0) return 'no tags here !'
        else return this.state.tags.map(tag => <li key={tag} >{tag}</li>)
    }


    render() {

        return (
            <div>
                <ul>
                    {this.renderTags()}
                </ul>
                {this.state.tags.length === 0 && "please create a new one !"}
            </div>);
    }


}

export default Counter;
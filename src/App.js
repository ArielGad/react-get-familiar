import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {

    state = {
        ninjas: [
            {name: "Ariel", age: 32, belt: "black", id:1},
            {name: "Foo", age: 23, belt: "brown", id:2},
            {name: "Bar", age: 27, belt: "blue", id:3},
        ]
    }

    render(){
        return (
            <div>
                <h1>Hello, World!</h1>
                <p>Welcome to my React mini project</p>
                <Ninjas ninjas={this.state.ninjas}/>
            </div>
        )
    }
}

export default App;
